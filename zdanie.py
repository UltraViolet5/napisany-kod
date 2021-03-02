#!/bin/python3

import sys
import os
from urllib.request import Request
from urllib.request import urlopen
from urllib.error import URLError
import json
from urllib import parse
from urllib import request



# Complete the function below.
# Base query: https://jsonmock.hackerrank.com/api/stocks

def  openAndClosePrices(firstDate, lastDate):


    newData =  urlopen("https://jsonmock.hackerrank.com/api/stocks")
    # data = newData.info()
    # print(data['date'])
    
    data = json.loads(newData.read().decode('utf-8'))
    print(data["data"][1]["date"])
    
    for d in data['data']:
        print(d["date"])
    
   

        

    try:
        _firstDate = str(input())
    except:
        _firstDate = None


    try:
        _lastDate = str(input())
    except:
        _lastDate = None

        
        



        
        
        
        
        
        
        
        
        
        
openAndClosePrices("1-January-2000", "11-January-2000")