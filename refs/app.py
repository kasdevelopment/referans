from flask import Flask, jsonify, render_template

app = Flask(__name__)


# @app.route("/")
# def hello():
#     return "<h3> Hello World! </h3>"


@app.route('/')
def getDistricts():
    district = {"adi": "ankara"}
    #return jsonify({"adi": "ankara"})
    return  render_template('index.html', data=district)


if __name__ == "__main__":
    app.run(debug=True)
