import os

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5177"]}})

# Simpele selectie van Feyenoord 1 (2024-2025, voorbeeld)
SPELERS = [
    {"naam": "Justin Bijlow", "positie": "Keeper", "rugnummer": 1, "nationaliteit": "Nederland", "geboortedatum": "1998-01-22", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/justin-bijlow", "contract_tot": 2025},
    {"naam": "Lutsharel Geertruida", "positie": "Verdediger", "rugnummer": 4, "nationaliteit": "Nederland", "geboortedatum": "2000-07-18", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/lutsharel-geertruida", "contract_tot": 2025},
    {"naam": "David Hancko", "positie": "Verdediger", "rugnummer": 33, "nationaliteit": "Slowakije", "geboortedatum": "1997-12-13", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/david-hancko", "contract_tot": 2028},
    {"naam": "Quilindschy Hartman", "positie": "Verdediger", "rugnummer": 5, "nationaliteit": "Nederland", "geboortedatum": "2001-11-14", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/quilindschy-hartman", "contract_tot": 2026},
    {"naam": "Gernot Trauner", "positie": "Verdediger", "rugnummer": 18, "nationaliteit": "Oostenrijk", "geboortedatum": "1992-03-25", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/gernot-trauner", "contract_tot": 2025},
    {"naam": "Mats Wieffer", "positie": "Middenvelder", "rugnummer": 8, "nationaliteit": "Nederland", "geboortedatum": "1999-11-16", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/mats-wieffer", "contract_tot": 2027},
    {"naam": "Quinten Timber", "positie": "Middenvelder", "rugnummer": 8, "nationaliteit": "Nederland", "geboortedatum": "2001-06-17", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/quinten-timber", "contract_tot": 2026},
    {"naam": "Calvin Stengs", "positie": "Middenvelder", "rugnummer": 10, "nationaliteit": "Nederland", "geboortedatum": "1998-12-18", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/calvin-stengs", "contract_tot": 2027},
    {"naam": "Igor Paixão", "positie": "Aanvaller", "rugnummer": 14, "nationaliteit": "Brazilië", "geboortedatum": "2000-06-28", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/igor-paixao", "contract_tot": 2027},
    {"naam": "Santiago Giménez", "positie": "Aanvaller", "rugnummer": 29, "nationaliteit": "Mexico", "geboortedatum": "2001-04-18", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/santiago-gimenez", "contract_tot": 2027},
    {"naam": "Alireza Jahanbakhsh", "positie": "Aanvaller", "rugnummer": 7, "nationaliteit": "Iran", "geboortedatum": "1993-08-11", "foto": "https://www.feyenoord.nl/teams/feyenoord-1/selectie/alireza-jahanbakhsh", "contract_tot": 2025}
]


@app.route('/')
def index():
    return 'Feyenoord API is running!'

@app.route('/api/hello')
def hello():
    return jsonify({'message': 'Hallo vanaf de backend!'}), 200

@app.route('/api/selectie')
def selectie():
    return jsonify(SPELERS), 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5003))
    app.run(host='0.0.0.0', port=port, debug=True)
