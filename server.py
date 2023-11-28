from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class VehicleEventData(BaseModel):
    info: dict 
    event: dict


@app.post("/vehicle-event/")
async def create_vehicle_event(data: VehicleEventData):
    print(data.model_dump())
    return {"message": "Data received successfully!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
