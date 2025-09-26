import house from "../../assets/houseIcon.png"
import cal from "../../assets/calIcon.png"
import assis from "../../assets/assisIcon.png"
import profile from "../../assets/profileIcon.png"

export const menuData = [
    {
        "id": 1,
        "img": {
            "src": house,
            "alt": "Ícone casa"
        },
        "a": {
            "href": "index.html",
            "value": "Início"
        },
    },
    {
        "id": 2,
        "img": {
            "src": cal,
            "alt": "Ícone calendário"
        },
        "a": {
            "href": "calendar.html",
            "value": "Calendário"
        },
    },
    {
        "id": 3,
        "img": {
            "src": assis,
            "alt": "Ícone assistente"
        },
        "a": {
            "href": "asssitent.html",
            "value": "Assistente"
        },
    },
    {
        "id": 4,
        "img": {
            "src": profile,
            "alt": "Ícone perfil"
        },
        "a": {
            "href": "profile.html",
            "value": "Perfil"
        },
    }
]