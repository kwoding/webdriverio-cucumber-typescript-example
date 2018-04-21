class TheInternetLoginPageObject {

    private _url: string = 'http://the-internet.herokuapp.com/login';
    private _username: string = '#username';
    private _password: string = '#password';
    private _submit: string = 'button[type="submit"]';
    private _successMessage: string = '.success';

    public openLoginScreen(): void {
        browser.url(this._url);
    }

    public login(username: string, password: string): void {
        browser
            .setValue(this._username, username)
            .setValue(this._password, password)
            .click(this._submit);
    }

    public getConfirmationText(): string {
        return browser.getText(this._successMessage);
    }
}

export {TheInternetLoginPageObject}