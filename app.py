import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask_cors import CORS

engine=create_engine("sqlite:///assests/data/games.sqlite")

app=Flask(__name__)
CORS(app)

@app.route("/data")
def home():
    results=engine.execute('select * from country_sales').fetchall()
    return_string=''
    for each_row in list(results): 
        for each_value in each_row: 
            return_string=return_string+str(each_value)
    return jsonify(return_string)

if __name__=="__main__":
    app.run(debug=True)