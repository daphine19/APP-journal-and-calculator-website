"""
 Application of Programming Principles
 Assignment Template 2021 - Flask & Python
"""
from flask import Flask, render_template, jsonify, request, make_response
import sys, json

app = Flask(__name__)


# @app.route('/')
# def hello_world():
# return 'Hello World!'

@app.route('/')
def home():
    return render_template('index.html')


@app.route("/api/add", methods=['GET'])
def add():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """

    # add your code here
    # use request.args.get('variable name') to get sent vars
    num1 = float(request.args.get("num1"))
    num2 = float(request.args.get("num2"))
    total = num1 + num2
    # return response
    response = make_response(
        jsonify(
            {"result": str(total)}), 200, )

    response.headers["content_type"] = "application/json"
    return response


@app.route("/api/subtract", methods=['GET'])
def subtract():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = float(request.args.get("num1"))
    num2 = float(request.args.get("num2"))
    difference = num1 - num2
    response = make_response(
        jsonify(
            {"result": str(difference)}), 200, )

    response.headers["content_type"] = "application/json"
    return response


@app.route("/api/multiply", methods=['GET'])
def multiply():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = float(request.args.get("num1"))
    num2 = float(request.args.get("num2"))
    result = num1 * num2
    response = make_response(
        jsonify(
            {"result": str(result)}), 200, )

    response.headers["content_type"] = "application/json"
    return response


@app.route("/api/divide", methods=['GET'])
def divide():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = float(request.args.get("num1"))
    num2 = float(request.args.get("num2"))
    result = ""
    if num2 == 0:
        result = "#DIV/0"
    else:
        result = num1 / num2
        print(result)
    response = make_response(
        jsonify(
            {"result": str(result)}), 200, )

    response.headers["content_type"] = "application/json"
    return response


@app.route("/api/journal", methods=['GET', 'PUT', 'DELETE'])
def journal():
    """
    Write a function to
        read the entries in the file containing the journal entries in the data folder
        format the result into JSON response object
        return the JSON response object
    """
    if request.method == 'GET':
        f = open("data/journal_testfile.json", "r")
        journalString = f.read()
        print(journalString)
        f.close()

        journal_response = make_response(jsonify({"result": journalString}), 200, )
        journal_response.headers["Content-Type"] = "application/json"
        print("after response made:" + str(journal_response))
        return journal_response

    elif request.method == 'PUT':
        f = open("data/journal_testfile.json", "w")
        json.dump(request.json, f)
        f.close()

        # alert("hurray you have uploaded the journal")
        journal_response = make_response(jsonify({"result": "successful"}), 200, )
        journal_response.headers["Content-Type"] = "application/json"
        print("after response made:" + str(journal_response))
        return journal_response


@app.route("/api/thoughtOfTheDay", methods=['GET', 'PUT', 'DELETE'])
def thoughts():
    if request.method == 'GET':
        f = open("data/thoughts.json", "r")
        thoughtString = f.read()
        print(thoughtString)
        f.close()

        journal_response = make_response(jsonify({"result": thoughtString}), 200, )
        journal_response.headers["Content-Type"] = "application/json"
        print("after response made:" + str(journal_response))
        return journal_response

    elif request.method == 'PUT':
        f = open("data/thoughts.json", "w")
        json.dump(request.json, f)
        f.close()

        # alert("hurray you have uploaded the journal")
        journal_response = make_response(jsonify({"result": "successful"}), 200, )
        journal_response.headers["Content-Type"] = "application/json"
        print("after response made:" + str(journal_response))
        return journal_response


if __name__ == '__main__':
    app.run()
