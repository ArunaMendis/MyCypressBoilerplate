import { ApplicationFormPage } from "../pages";
import { ConfirmationPage } from "../pages";
import { personInfor } from "../../fixtures/application";

describe('SauceLabs Assignment', function() {
  it('Main test scenario', function() {

    ApplicationFormPage.visitLoginPage();
    ApplicationFormPage.verifyApplication(personInfor.infor.firstname, personInfor.infor.lastname, personInfor.infor.email, personInfor.infor.phone);
    ConfirmationPage.verifyConfirmationPage();

     
  });
});