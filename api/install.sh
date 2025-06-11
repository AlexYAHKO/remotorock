#!/bin/bash

python3 -m venv venv_api

source venv_api/bin/activate

pip install fastapi uvicorn