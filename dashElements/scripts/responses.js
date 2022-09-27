function getBotResponse(input) {
    //rock paper scissors
    if (input == "Quisiera una cita con la Dra. Maria") {
        return "Claro, espera un mensaje de la Dra. Maria pronto!";
    } else if (input == "Hola") {
        return "Hola, Qué necesitas?";
    } else if (input == "texto de prueba") {
        return "texto de prueba";
    }

    // Simple responses
    if (input == "Me gustaria agendar una cita") {
        return "Con gusto, espera un mensaje de nuestros especialistas";
    } else if (input == "Gracias") {
        return "Un gusto ayudarte, Jesús!";
    } else {
        return "Intenta preguntando otra cosa";
    }
}