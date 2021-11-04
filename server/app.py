from flask import Flask, request

from cryptography import encrypt, decrypt


app = Flask(__name__)

@app.route('/')
def index():
    return "hello world"

@app.route('/encrypt', methods=['GET'])
def encryptHandler():
    assert request.method == 'GET', "/encrypt route should only have GET method"
    # print("request = ", request.args)
    cipher = encrypt(request.args['plaintext'], int(request.args['key']))
    return cipher

@app.route('/decrypt', methods=(['GET']))
def decryptHandler():
    assert request.method == 'GET', "/decrypt route should only have GET method"
    plaintext = decrypt(request.args['ciphertext'], int(request.args['key']))
    return plaintext

if __name__ == "__main__":
    app.run(debug=True)