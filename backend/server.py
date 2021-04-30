# Import libraries
import csv 
import json 
import numpy as np
from flask import Flask, request, jsonify
import pickle
app = Flask(__name__, template_folder="template")

def open_json():
    with open('test.json', 'r') as j:
        json_data = json.load(j)
        print(json_data)
        return json_data

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            #add this python dict to json array
            jsonArray.append(row)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)

# Load the model
model = pickle.load(open('modelo.pkl','rb'))
@app.route('/api',methods=['POST'])
def predict():
    # Get the data from the POST request.
    data = request.get_json(force=True)
    print(data)
    # Make prediction using model loaded from disk as per the data.

    # csvFilePath = r'data.csv'
    # jsonFilePath = r'data.json'
    # csv_to_json(csvFilePath, jsonFilePath)

    json_data = open_json()
    prediction = model.predict([np.array(json_data)])
    # Take the first value of prediction
    output = prediction[0]
    return jsonify(output)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
    app.run(port=5000, debug=True)