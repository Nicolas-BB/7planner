import houseIcon from "../../../assets/houseIcon.png"
import calIcon from "../../../assets/calIcon.png"
import assisIcon from "../../../assets/assisIcon.png"
import profileIcon from "../../../assets/profileIcon.png"

export const menuData = [
    {
        "id": 1,
        "img": {
            "src": houseIcon,
            "alt": "Ícone casa"
        },
        "a": {
            "href": "/",
            "value": "Início"
        },
    },
    {
        "id": 2,
        "img": {
            "src": calIcon,
            "alt": "Ícone calendário"
        },
        "a": {
            "href": "/calendar",
            "value": "Calendário"
        },
    },
    {
        "id": 3,
        "img": {
            "src": assisIcon,
            "alt": "Ícone assistente"
        },
        "a": {
            "href": "/assistant",
            "value": "Assistente"
        },
    },
    {
        "id": 4,
        "img": {
            "src": profileIcon,
            "alt": "Ícone perfil"
        },
        "a": {
            "href": "/profile",
            "value": "Perfil"
        },
    }
]