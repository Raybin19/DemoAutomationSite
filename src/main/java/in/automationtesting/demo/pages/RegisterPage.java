package in.automationtesting.demo.pages;


import in.automationtesting.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;




public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//input[@type='email']")
    WebElement emailId;

    @CacheLookup
    @FindBy(xpath = "//input[@type='tel']")
    WebElement phone;

    @CacheLookup
    @FindBy(xpath = "//input[@value='FeMale']")
    WebElement genderRadioBtn;

    @CacheLookup
    @FindBy(xpath = "//select[@id='countries']")
    WebElement country;

    @CacheLookup
    @FindBy(xpath = "//input[@id='firstpassword']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='secondpassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "//button[@id='submitbtn']")
    WebElement submitBtn;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Register']")
    WebElement registerText;


    public void enterFirstName(String firstname) {
        sendTextToElement(firstName, firstname);
        log.info("Enter first name in textbox" + firstName.toString());
    }

    public void enterLastName(String lastname) {
        sendTextToElement(lastName, lastname);
        log.info("Enter last name in textbox" + lastName.toString());
    }

    public void enterEmailAddress(String email) {
        sendTextToElement(emailId, email);
        log.info("Enter email in textbox" + emailId.toString());
    }

    public void enterPhoneNumber(String number) {
        sendTextToElement(phone, number);
        log.info("Enter phone number in textbox" + phone.toString());
    }

    public void clickOnGenderRadioButton() {
        clickOnElement(genderRadioBtn);
        log.info("Clicking on gender radio button" + genderRadioBtn.toString());
    }

    public void selectCountry() {
        clickOnElement(country);
        log.info("Clicking on Country" + country.toString());
    }

    public void enterPassword(String pwd) {
        sendTextToElement(password, pwd);
        log.info("Enter password in textbox" + password.toString());
    }

    public void enterConfirmPassword(String pswd) {
        sendTextToElement(confirmPassword, pswd);
        log.info("Enter confirm password in textbox" + confirmPassword.toString());
    }

    public void clickOnSubmitButton() {
        clickOnElement(submitBtn);
        log.info("Clicking on submit button" + submitBtn.toString());
    }

    public String verifyRegisterPageText(){
        String text = registerText.getText();
        log.info("Verifying the register page text " + registerText.toString());
        return text;
     }

    public String verifyErrorMessageText(){
        String text = registerText.getText();
        log.info("Verifying the error message text " + registerText.toString());
        return text;
    }
}

