# Australia COVID-19 Vaccine Tracker

Displays up-to-date numbers regarding Australia's coronavirus vaccination rates on the national and state level, and counts down the days until the 80% target is met. The data is presented in a very elegant, interactive, and user-friendly manner. 
 
## Objective

At the time of writing this description, **Australia would need to vaccinate 80% of its eligible population against COVID-19 before it can consider reopening its border**, as part of Prime Minister Scott Morrison's four-stage plan to ease restrictions around travel and lockdowns. Citizens and tourists in and out of Australia have been eagerly awaiting good news, while the rest of the world seems to have started opening up. 

The dashboard provides the most relevant numbers regarding vaccination targets for people to eagerly tune in to everyday.

<img width="820" height="500" src="https://user-images.githubusercontent.com/69211573/137333294-2c851856-32b6-4232-a222-5b9e7dd9c71c.png">

## Features

- Navigate seamlessly between national and state data

![navigate-between-states](https://user-images.githubusercontent.com/69211573/137523287-681da58c-54e8-4cd1-92c7-5151d15fbc47.gif)

- Charts load in beautifully with a delayed animation

![](https://user-images.githubusercontent.com/69211573/137516293-052e70ae-0254-43e1-aaf4-80ca2d195053.gif)

- Loading icon displayed when data is being fetched

![homepage-onload](https://user-images.githubusercontent.com/69211573/137526531-90134fa6-dae1-466d-9786-f7e85ef77386.gif)

- Data fades in smoothly 

![state-transition](https://user-images.githubusercontent.com/69211573/137525270-73a9a97f-459e-458a-abff-28280f571075.gif)

- 2nd Dose % and 1st Dose % 
<img width="650" height="150" src="https://user-images.githubusercontent.com/69211573/137513753-bd00a009-eab7-4bf4-932b-42de4503a5f1.png">

- Estimated Date and Days Left until the 80% target threshold will be met
<img width="230" height="300" src="https://user-images.githubusercontent.com/69211573/137514141-195c2c61-1109-4264-9590-73ccf91fa923.png">

- 2nd Dose % across various age ranges in the form of a bar chart 

![image](https://user-images.githubusercontent.com/69211573/137514973-046d56e0-63c3-4274-8ec2-7b908e0ffbec.png)

- Tick mark displayed when 80% vaccination target is completed in a particular region

<img width="1440" alt="tickmark-completion" src="https://user-images.githubusercontent.com/69211573/138649836-4df55317-3e47-4970-b0ad-2e10fe579972.png">

## How To Run This Project

1. Clone the repository.
	
2. Open your Terminal (Mac) and run the following lines of code:-
   
   Use the appropriate command to navigate into the project directory:
   ```
   cd aus-vaccine-tracker
   ```
   
   Open the html file
   ```
   open index.html
   ```
    
## Languages and Tools Used
- JavaScript
- HTML 
- CSS (Sass)
- [Chart.js](https://www.chartjs.org/)
- [Bootstrap](https://getbootstrap.com/)


## Data Sources

- [Australian Government Department of Health](https://www.health.gov.au/)
- Data extracted by [Ken Tsang](https://github.com/jxeeno/aust-govt-covid19-vaccine-pdf)



## License
This project is licensed under the [GPL-3.0 License](./LICENSE). Please include a link to this GitHub repository.
