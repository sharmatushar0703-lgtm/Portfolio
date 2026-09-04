import http.server
import socketserver
import os
import sys

PORT = 5174
DIST_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

if not os.path.exists(DIST_DIR):
    print(f"Error: Production build folder not found at {DIST_DIR}")
    sys.exit(1)

class SPAServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()

    def do_GET(self):
        # Resolve requested path inside dist
        req_path = self.path.split("?")[0].split("#")[0]
        full_path = os.path.join(DIST_DIR, req_path.lstrip("/"))

        # If file doesn't exist and doesn't look like a static asset, fallback to index.html
        if not os.path.exists(full_path):
            if not any(req_path.endswith(ext) for ext in [".js", ".css", ".png", ".jpg", ".svg", ".ico", ".woff", ".woff2", ".ttf"]):
                self.path = "/index.html"

        return super().do_GET()

    def guess_type(self, path):
        if path.endswith((".js", ".mjs")):
            return "application/javascript"
        if path.endswith(".css"):
            return "text/css"
        if path.endswith(".svg"):
            return "image/svg+xml"
        if path.endswith(".json"):
            return "application/json"
        return super().guess_type(path)

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), SPAServer) as httpd:
        print(f"🚀 Tushar Sharma Portfolio is LIVE!")
        print(f"👉 Local Access:   http://localhost:{PORT}")
        print(f"👉 Loopback:       http://127.0.0.1:{PORT}")
        print(f"👉 Serving directory: {DIST_DIR}")
        print("Press Ctrl+C to stop the server.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            sys.exit(0)
