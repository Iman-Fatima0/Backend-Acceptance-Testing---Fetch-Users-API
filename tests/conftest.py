from dotenv import load_dotenv
import os

def pytest_configure(config):
    # Load values from .env
    load_dotenv()

    port = os.getenv("PORT", "5000")
    base_url = os.getenv("BASE_URL", f"http://localhost:{port}")
    token = os.getenv("AUTH_TOKEN", "")

    # Provide variables to Tavern
    config._tavern_global_config = {
        "variables": {
            "PORT": port,
            "base_url": base_url,
            "auth_token": token,  # always comes from .env
        }
    }