# Calculator App

Create an calculator app, that lets user create operations and get the solutions to them. User creates this operations by interacting with buttons, and depending on the button, it adds a character to the operation being created. Once user feels happy with the operation created, they can click on the 'equal' button to get result. 

### Main Features
- Two Displays
    - Top display is for previous operation or solution
    - Bottom display is the main display where operations are being created
- CE Button
    - One click clears bottom display, and saves data in top display 
    - Double click clears both displays
- RE Button 
    - Recalls last operation or solution that was stored in top display, this will clear top display, since data is being recalled
- Click on Bottom Display
    - If mistake was made by user, user is able to click on display and delete last character in the operation being created
- Validation when user clicks on 'equal' button
    - If operation is empty, it won't cause an undefined error, instead display is left empty
    - If operation syntax is invalid, it will throw an error alert, and leave display with said operation, so user can fix it 
- Dark/Light Mode Button
    - When click, it will toggle between two sets of CSS setups

[Calculator App Link](https://mquispe96.github.io/calculator_app_mq/)    
