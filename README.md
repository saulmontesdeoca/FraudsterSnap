# FraudsterSnap

## 👏 Contributors
 - [Saúl Montes De Oca](https://github.com/saulmontesdeoca) A01025975
 - [Diego Moreno Acevedo](https://github.com/DiegoMA1) A01022113
 - [Victor Coeto](https://github.com/vcoeto) A01654866


## 📚 Description
FraudsterSnap is an app that uses ML to predict fraud in online transactions based on the cloud and using react to adjust for the web.


It works by an innovative prediction model which helps the user on the transactions that happens day to day in order to detect frauds on the account. All the computing is done on the cloud through an API and showed in the app built on React. 

## 🦾 Training 

The model is trained under several machine learning algorithms such as K-Nearest-Neighbours and Ranom Forest in order to see which one is more efficient given the Dataset used.  

The second model, if time lets us, is going to be an automatic way on 

The dataset used comes from Kaggle and can be found in [here.](https://www.kaggle.com/c/ieee-fraud-detection/overview)

## 🚀 Expected functionality

The main functionality of the app is to be a valuable asset in client transactions such that online transaction frauds can be predicted, avoided, and mitigated.
The app will get a transaction input it will process it using Machine Learning. It will return these fraud-predictions as binary outcomes that tells us if the transaction has a probable fraud or not. 

## 🔧 Technologies to be used

- GCP
- React 
- Scikit learn
- Pandas
- Numpy
 

# Exploration

There was 2 datasets, one of transactions and the other of information from de people making the transactions, we unite them and create a unique dataset to work with and consequently we could see the key features that we can pass on to the created model. 

# Preprocesing of data
Load and cleaned data to see the valuable features.

Trained a Random Forest algorithm: got 0.61 of accuracy, we needed to do better.

Got the important features and used LightGBM to get at least a 0.91 accuracy.

# Problems with fraud detection/prediction
Imbalanced data: Very few fraudulent cases in a huge amount of legitimate transactions which causes building accurate models very hard.
\
\
Incorrect flagging: bad predicting fraudulent transactions involve risks such as losing clients or reputation.

# Cloud App

*Backend* \
Is the python API built on flask in charge of the processing of the data and the outcome as the result if it’s a fraud or not. Is built on the same GCP. 

*Frontend* \
It’s the application mounted on react. it does the login authentication, the csv upload and the communication with the firebase database through a VM instance in GCP.
