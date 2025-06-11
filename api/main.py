from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


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
