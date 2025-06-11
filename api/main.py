from fastapi import FastAPI

app = FastAPI()

@app.get("/api/v1/servers")
def servers():
    return [
                {
                    "name": "Pietro",
                    "port": 31862, 
                    "id": 1
                },
                {
                    "name": "Brody",
                    "port": 59632, 
                    "id": 2 
                },
                {
                  "name": "Christian",
                  "port": 58559,
                  "id": "3"
                },
                {
                  "name": "Olin",
                  "port": 35773,
                  "id": "4"
                }
            ]
