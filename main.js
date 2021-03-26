Moralis.initialize("VTxTJJMWSVX2oEELsE4FIvMFeNn5qaJ411EiYrAt"); // Aplication id moralis.io
Moralis.serverURL = "https://an4jqat5ktvz.moralis.io:2053/server" //Server url from moralis.io

async funcion login() {
    try {

        user = await Moralis.Web3.authenticate();
        let email = document.getElementById ("email_input").value;
        user.set("email", email);
        await user.save();
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("login_button").onclick = login;
