from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


class WebsitePreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        requested_path = unquote(urlsplit(self.path).path)
        if requested_path != "/" and not Path(requested_path).suffix:
            self.path = "/index.html"
        super().do_GET()


if __name__ == "__main__":
    address = ("127.0.0.1", 8766)
    print(f"Preview available at http://{address[0]}:{address[1]}/")
    ThreadingHTTPServer(address, WebsitePreviewHandler).serve_forever()
