let translations = {}

translations['en'] = {}

translations['en']['close'] = "Close"
translations['en']['cancel'] = "Cancel"
translations['en']['refresh'] = "Refresh"
translations['en']['trashItem'] = "Trash"
translations['en']['moveItem'] = "Move"
translations['en']['myCloud'] = "My Cloud"
translations['en']['loginTitle'] = "Sign in"
translations['en']['registerTitle'] = "Create an account"
translations['en']['or'] = "or"
translations['en']['loginButton'] = "Sign in"
translations['en']['registerButton'] = "Create account"
translations['en']['registerLink'] = "Create an account (First 10 GB free)"
translations['en']['loginLink'] = "Sign in"
translations['en']['passwordRepeatPlaceholder'] = "Repeat password"
translations['en']['emailPlaceholder'] = "Email address"
translations['en']['passwordPlaceholder'] = "Password"
translations['en']['2faPlaceholder'] = "2FA code (leave empty if disabled)"
translations['en']['loginInvalidInputs'] = "Invalid email address and password"
translations['en']['alertOkButton'] = "OK"
translations['en']['loginWrongCredentials'] = "Wrong email, password or 2FA code"
translations['en']['apiRequestError'] = "Request error, please try again later"
translations['en']['registerInvalidFields'] = "Invalid form fields"
translations['en']['registerPasswordAtLeast10Chars'] = "Your password needs to be at least 10 characters long"
translations['en']['registerPasswordsDoNotMatch'] = "Passwords do not match"
translations['en']['registerInvalidEmail'] = "Invalid email address"
translations['en']['registerEmailAlreadyRegistered'] = "This email address is already registered"
translations['en']['registerCouldNotSendEmail'] = "OK"
translations['en']['alertOkButton'] = "We could not send an email at this time, please try again later"
translations['en']['registerSuccess'] = "Account created, please confirm your email address by clicking the link we've sent to you"
translations['en']['registerInvalidInputs'] = "Invalid email address, password and confirm password"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"
translations['en']['alertOkButton'] = "OK"

translations['nl']['close'] = "Sluit"
translations['nl']['cancel'] = "Annuleer"
translations['nl']['refresh'] = "Ververs"
translations['nl']['trashItem'] = "Prullenbak"
translations['nl']['moveItem'] = "Verplaats"
translations['nl']['myCloud'] = "Mijn Cloud"
translations['nl']['loginTitle'] = "Log in"
translations['nl']['registerTitle'] = "Maak een account"
translations['nl']['or'] = "of"
translations['nl']['loginButton'] = "Log in"
translations['nl']['registerButton'] = "Maak account"
translations['nl']['registerLink'] = "Maak een account (Eerste 10 GB gratis)"
translations['nl']['loginLink'] = "Log in"
translations['nl']['passwordRepeatPlaceholder'] = "Herhaal wachtwoord"
translations['nl']['emailPlaceholder'] = "E-mailadres"
translations['nl']['passwordPlaceholder'] = "Wachtwoord"
translations['nl']['2faPlaceholder'] = "2FA code (Laat veld leeg indien uitgeschakeld)"
translations['nl']['loginInvalidInputs'] = "Onjuist e-mailadres en wachtwoord"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['loginWrongCrednltials'] = "Onjuist e-mailadres, wachtwoord of 2FA code"
translations['nl']['apiRequestError'] = "Er is een fout opgetreden met uw verzoek, probeer het later opnieuw"
translations['nl']['registerInvalidFields'] = "Ongeldige formuliervelden"
translations['nl']['registerPasswordAtLeast10Chars'] = "Uw wachtwoord moet minimaal 10 tekens lang zijn"
translations['nl']['registerPasswordsDoNotMatch'] = "Wachtwoorden komen niet overeen"
translations['nl']['registerInvalidEmail'] = "Ongeldig e-mailadres"
translations['nl']['registerEmailAlreadyRegistered'] = "Het opgegeven e-mailadres is al geregistreerd"
translations['nl']['registerCouldNotSnldEmail'] = "Ok"
translations['nl']['alertOkButton'] = "We konden op dit moment geen e-mail verzenden, probeer het later opnieuw"
translations['nl']['registerSuccess'] = "Uw account is aangemaakt, bevestig uw e-mailadres door op de link te klikken die we naar u hebben toegestuurd"
translations['nl']['registerInvalidInputs'] = "Ongeldig e-mailadres, wachtwoord en bevestig wachtwoord"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"
translations['nl']['alertOkButton'] = "Ok"

module.exports = {
    get: (lang = "en", text, firstUpperCase = true, replaceFrom = [], replaceTo = []) => {
        let gotText = translations[lang][text]

        if(!gotText){
            return "NO_TRANSLATION_FOUND"
        }

        if(firstUpperCase){
            gotText = gotText.charAt(0).toUpperCase() + gotText.slice(1)
        }

        if(replaceFrom.length > 0 && replaceTo.length > 0){
            for(let i = 0; i < replaceFrom.length; i++){
                gotText = gotText.split(replaceFrom[i]).join(replaceTo[i])
            }
        }

        return gotText
    }
}
