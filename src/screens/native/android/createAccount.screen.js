class CreateAccountScreen {
    constructor() {
        this.userName = '//android.widget.EditText[@text="Username"]'
        this.password = '//android.widget.EditText[@text="Password"]'
        this.repeatPassword = '//android.widget.EditText[@text="Repeat password"]'
        this.submitButton = '//android.widget.Button[@resource-id="org.wikipedia:id/create_account_submit_button"]'
        this.error = 'id:org.wikipedia:id/textinput_error'
    }
}

module.exports = new CreateAccountScreen();

