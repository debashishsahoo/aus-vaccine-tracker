/*  Preparing to fetch all the required data  */

// Converting today's and yesterday's date into ISO string format
let today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
let todayDate = today.toISOString().slice(0,10)
let yesterdayDate = yesterday.toISOString().slice(0,10)

// Checking for the latest data by fetching url with today's date
let url = "https://raw.githubusercontent.com/jxeeno/aust-govt-covid19-vaccine-pdf/master/docs/data/" + todayDate + ".json";
fetch(url)
    .then(function(response){
        if (response.ok) {   
            // If url exists, fetch url with today's date
            var urlDate = today;
            var newurl = "https://raw.githubusercontent.com/jxeeno/aust-govt-covid19-vaccine-pdf/master/docs/data/" + todayDate + ".json";
        } else {    
            // If url doesn't exist, fetch url with yesterday's date
            var urlDate = yesterday;
            var newurl = "https://raw.githubusercontent.com/jxeeno/aust-govt-covid19-vaccine-pdf/master/docs/data/" + yesterdayDate + ".json";
        }        
        fetch(newurl)
            .then(response => response.json())
            .then(data => {
                let vaccineData = data["pdfData"];

                // Collecting 1st and 2nd dose percentages on the national and state level
                let ausSecondDosePct = vaccineData["doseBreakdown"]["AUS"][0]["secondDosePct"];
                let ausFirstDosePct = vaccineData["doseBreakdown"]["AUS"][0]["firstDosePct"];

                let nswSecondDosePct = vaccineData["doseBreakdown"]["NSW"][0]["secondDosePct"];
                let nswFirstDosePct = vaccineData["doseBreakdown"]["NSW"][0]["firstDosePct"];

                let vicSecondDosePct = vaccineData["doseBreakdown"]["VIC"][0]["secondDosePct"];
                let vicFirstDosePct = vaccineData["doseBreakdown"]["VIC"][0]["firstDosePct"];

                let qldSecondDosePct = vaccineData["doseBreakdown"]["QLD"][0]["secondDosePct"];
                let qldFirstDosePct = vaccineData["doseBreakdown"]["QLD"][0]["firstDosePct"];

                let actSecondDosePct = vaccineData["doseBreakdown"]["ACT"][0]["secondDosePct"];
                let actFirstDosePct = vaccineData["doseBreakdown"]["ACT"][0]["firstDosePct"];

                let waSecondDosePct = vaccineData["doseBreakdown"]["WA"][0]["secondDosePct"];
                let waFirstDosePct = vaccineData["doseBreakdown"]["WA"][0]["firstDosePct"];

                let tasSecondDosePct = vaccineData["doseBreakdown"]["TAS"][0]["secondDosePct"];
                let tasFirstDosePct = vaccineData["doseBreakdown"]["TAS"][0]["firstDosePct"];

                let saSecondDosePct = vaccineData["doseBreakdown"]["SA"][0]["secondDosePct"];
                let saFirstDosePct = vaccineData["doseBreakdown"]["SA"][0]["firstDosePct"];

                let ntSecondDosePct = vaccineData["doseBreakdown"]["NT"][0]["secondDosePct"];
                let ntFirstDosePct = vaccineData["doseBreakdown"]["NT"][0]["firstDosePct"];

                // Calculating the 80% target for second dose count on the national and state level
                let ausSecondDoseCount = vaccineData["doseBreakdown"]["AUS"][0]["secondDoseCount"];
                let ausTargetPopulation = vaccineData["doseBreakdown"]["AUS"][0]["cohortPopulation"];
                let ausTargetSecondDoseCount = (80/100) * ausTargetPopulation; 

                let nswSecondDoseCount = vaccineData["doseBreakdown"]["NSW"][0]["secondDoseCount"];
                let nswTargetPopulation = vaccineData["doseBreakdown"]["NSW"][0]["cohortPopulation"];
                let nswTargetSecondDoseCount = (80/100) * nswTargetPopulation; 

                let vicSecondDoseCount = vaccineData["doseBreakdown"]["VIC"][0]["secondDoseCount"];
                let vicTargetPopulation = vaccineData["doseBreakdown"]["VIC"][0]["cohortPopulation"];
                let vicTargetSecondDoseCount = (80/100) * vicTargetPopulation; 

                let qldSecondDoseCount = vaccineData["doseBreakdown"]["QLD"][0]["secondDoseCount"];
                let qldTargetPopulation = vaccineData["doseBreakdown"]["QLD"][0]["cohortPopulation"];
                let qldTargetSecondDoseCount = (80/100) * qldTargetPopulation; 

                let actSecondDoseCount = vaccineData["doseBreakdown"]["ACT"][0]["secondDoseCount"];
                let actTargetPopulation = vaccineData["doseBreakdown"]["ACT"][0]["cohortPopulation"];
                let actTargetSecondDoseCount = (80/100) * actTargetPopulation; 

                let waSecondDoseCount = vaccineData["doseBreakdown"]["WA"][0]["secondDoseCount"];
                let waTargetPopulation = vaccineData["doseBreakdown"]["WA"][0]["cohortPopulation"];
                let waTargetSecondDoseCount = (80/100) * waTargetPopulation; 

                let tasSecondDoseCount = vaccineData["doseBreakdown"]["TAS"][0]["secondDoseCount"];
                let tasTargetPopulation = vaccineData["doseBreakdown"]["TAS"][0]["cohortPopulation"];
                let tasTargetSecondDoseCount = (80/100) * tasTargetPopulation; 

                let saSecondDoseCount = vaccineData["doseBreakdown"]["SA"][0]["secondDoseCount"];
                let saTargetPopulation = vaccineData["doseBreakdown"]["SA"][0]["cohortPopulation"];
                let saTargetSecondDoseCount = (80/100) * saTargetPopulation; 

                let ntSecondDoseCount = vaccineData["doseBreakdown"]["NT"][0]["secondDoseCount"];
                let ntTargetPopulation = vaccineData["doseBreakdown"]["NT"][0]["cohortPopulation"];
                let ntTargetSecondDoseCount = (80/100) * ntTargetPopulation; 

                // Collecting 2nd dose percentages across age ranges for rendering Charts
                let ausSecondDosePctOver50 = vaccineData["doseBreakdown"]["AUS"][1]["secondDosePct"];
                let ausSecondDosePctOver70 = vaccineData["doseBreakdown"]["AUS"][2]["secondDosePct"];

                let nswSecondDosePctOver50 = vaccineData["doseBreakdown"]["NSW"][1]["secondDosePct"];
                let nswSecondDosePctOver70 = vaccineData["doseBreakdown"]["NSW"][2]["secondDosePct"];

                let vicSecondDosePctOver50 = vaccineData["doseBreakdown"]["VIC"][1]["secondDosePct"];
                let vicSecondDosePctOver70 = vaccineData["doseBreakdown"]["VIC"][2]["secondDosePct"];

                let qldSecondDosePctOver50 = vaccineData["doseBreakdown"]["QLD"][1]["secondDosePct"];
                let qldSecondDosePctOver70 = vaccineData["doseBreakdown"]["QLD"][2]["secondDosePct"];

                let actSecondDosePctOver50 = vaccineData["doseBreakdown"]["ACT"][1]["secondDosePct"];
                let actSecondDosePctOver70 = vaccineData["doseBreakdown"]["ACT"][2]["secondDosePct"];

                let waSecondDosePctOver50 = vaccineData["doseBreakdown"]["WA"][1]["secondDosePct"];
                let waSecondDosePctOver70 = vaccineData["doseBreakdown"]["WA"][2]["secondDosePct"];

                let tasSecondDosePctOver50 = vaccineData["doseBreakdown"]["TAS"][1]["secondDosePct"];
                let tasSecondDosePctOver70 = vaccineData["doseBreakdown"]["TAS"][2]["secondDosePct"];

                let saSecondDosePctOver50 = vaccineData["doseBreakdown"]["SA"][1]["secondDosePct"];
                let saSecondDosePctOver70 = vaccineData["doseBreakdown"]["SA"][2]["secondDosePct"];

                let ntSecondDosePctOver50 = vaccineData["doseBreakdown"]["NT"][1]["secondDosePct"];
                let ntSecondDosePctOver70 = vaccineData["doseBreakdown"]["NT"][2]["secondDosePct"];

                // Fetching second dose count from 7 days ago for calculating 7-day average 
                let sevenDaysAgo = new Date(urlDate);
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                let sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);

                let sevenDaysAgoUrl = "https://raw.githubusercontent.com/jxeeno/aust-govt-covid19-vaccine-pdf/master/docs/data/" + sevenDaysAgoDate + ".json";
                fetch(sevenDaysAgoUrl)
                    .then(response => response.json())
                    .then(json => {
                        let sevenDaysAgoData = json["pdfData"];

                        // Collecting data to calculate 7-day average and doses left until the target dose count can be reached
                        let sevenDaysAgoAusSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["AUS"][0]["secondDoseCount"];
                        let pastWeekAusSecondDoseCount = (ausSecondDoseCount - sevenDaysAgoAusSecondDoseCount);
                        let sevenDayAusSecondDoseAverage = (pastWeekAusSecondDoseCount / 7);
                        let ausDosesLeftUntilTarget = (ausTargetSecondDoseCount - ausSecondDoseCount);

                        let sevenDaysAgoNswSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["NSW"][0]["secondDoseCount"];
                        let pastWeekNswSecondDoseCount = (nswSecondDoseCount - sevenDaysAgoNswSecondDoseCount);
                        let sevenDayNswSecondDoseAverage = (pastWeekNswSecondDoseCount / 7);
                        let nswDosesLeftUntilTarget = (nswTargetSecondDoseCount - nswSecondDoseCount);

                        let sevenDaysAgoVicSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["VIC"][0]["secondDoseCount"];
                        let pastWeekVicSecondDoseCount = (vicSecondDoseCount - sevenDaysAgoVicSecondDoseCount);
                        let sevenDayVicSecondDoseAverage = (pastWeekVicSecondDoseCount / 7);
                        let vicDosesLeftUntilTarget = (vicTargetSecondDoseCount - vicSecondDoseCount);

                        let sevenDaysAgoQldSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["QLD"][0]["secondDoseCount"];
                        let pastWeekQldSecondDoseCount = (qldSecondDoseCount - sevenDaysAgoQldSecondDoseCount);
                        let sevenDayQldSecondDoseAverage = (pastWeekQldSecondDoseCount / 7);
                        let qldDosesLeftUntilTarget = (qldTargetSecondDoseCount - qldSecondDoseCount);

                        let sevenDaysAgoActSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["ACT"][0]["secondDoseCount"];
                        let pastWeekActSecondDoseCount = (actSecondDoseCount - sevenDaysAgoActSecondDoseCount);
                        let sevenDayActSecondDoseAverage = (pastWeekActSecondDoseCount / 7);
                        let actDosesLeftUntilTarget = (actTargetSecondDoseCount - actSecondDoseCount);

                        let sevenDaysAgoWaSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["WA"][0]["secondDoseCount"];
                        let pastWeekWaSecondDoseCount = (waSecondDoseCount - sevenDaysAgoWaSecondDoseCount);
                        let sevenDayWaSecondDoseAverage = (pastWeekWaSecondDoseCount / 7);
                        let waDosesLeftUntilTarget = (waTargetSecondDoseCount - waSecondDoseCount);

                        let sevenDaysAgoTasSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["TAS"][0]["secondDoseCount"];
                        let pastWeekTasSecondDoseCount = (tasSecondDoseCount - sevenDaysAgoTasSecondDoseCount);
                        let sevenDayTasSecondDoseAverage = (pastWeekTasSecondDoseCount / 7);
                        let tasDosesLeftUntilTarget = (tasTargetSecondDoseCount - tasSecondDoseCount);

                        let sevenDaysAgoSaSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["SA"][0]["secondDoseCount"];
                        let pastWeekSaSecondDoseCount = (saSecondDoseCount - sevenDaysAgoSaSecondDoseCount);
                        let sevenDaySaSecondDoseAverage = (pastWeekSaSecondDoseCount / 7);
                        let saDosesLeftUntilTarget = (saTargetSecondDoseCount - saSecondDoseCount);

                        let sevenDaysAgoNtSecondDoseCount = sevenDaysAgoData["doseBreakdown"]["NT"][0]["secondDoseCount"];
                        let pastWeekNtSecondDoseCount = (ntSecondDoseCount - sevenDaysAgoNtSecondDoseCount);
                        let sevenDayNtSecondDoseAverage = (pastWeekNtSecondDoseCount / 7);
                        let ntDosesLeftUntilTarget = (ntTargetSecondDoseCount - ntSecondDoseCount);

                        /*                         
                        Creating an object array with all the data variables calculated so far categorised by region; 
                        to be used later for calculations and displaying data on the DOM 
                        */                        
                        let dataVariablesByRegion = {
                            "aus": [ausSecondDosePct, ausFirstDosePct, sevenDayAusSecondDoseAverage, ausDosesLeftUntilTarget, ausSecondDosePctOver50, ausSecondDosePctOver70],
                            "nsw": [nswSecondDosePct, nswFirstDosePct, sevenDayNswSecondDoseAverage, nswDosesLeftUntilTarget, nswSecondDosePctOver50, nswSecondDosePctOver70],
                            "vic": [vicSecondDosePct, vicFirstDosePct, sevenDayVicSecondDoseAverage, vicDosesLeftUntilTarget, vicSecondDosePctOver50, vicSecondDosePctOver70],
                            "qld": [qldSecondDosePct, qldFirstDosePct, sevenDayQldSecondDoseAverage, qldDosesLeftUntilTarget, qldSecondDosePctOver50, qldSecondDosePctOver70],
                            "act": [actSecondDosePct, actFirstDosePct, sevenDayActSecondDoseAverage, actDosesLeftUntilTarget, actSecondDosePctOver50, actSecondDosePctOver70],
                            "wa": [waSecondDosePct, waFirstDosePct, sevenDayWaSecondDoseAverage, waDosesLeftUntilTarget, waSecondDosePctOver50, waSecondDosePctOver70],
                            "tas": [tasSecondDosePct, tasFirstDosePct, sevenDayTasSecondDoseAverage, tasDosesLeftUntilTarget, tasSecondDosePctOver50, tasSecondDosePctOver70],
                            "sa": [saSecondDosePct, saFirstDosePct, sevenDaySaSecondDoseAverage, saDosesLeftUntilTarget, saSecondDosePctOver50, saSecondDosePctOver70],
                            "nt": [ntSecondDosePct, ntFirstDosePct, sevenDayNtSecondDoseAverage, ntDosesLeftUntilTarget, ntSecondDosePctOver50, ntSecondDosePctOver70]
                        } 

                        /*                         
                        Calculating and displaying National Data by default on the landing page
                        */

                        // Calculating days left until target will be met based on 7-day average for Australia
                        let ausDaysLeftUntilTarget = Math.ceil(ausDosesLeftUntilTarget / sevenDayAusSecondDoseAverage);

                        // Calculating date when target will be met based on 7-day average for Australia
                        let ausEstimatedTarget = new Date(urlDate);
                        ausEstimatedTarget.setDate(ausEstimatedTarget.getDate() + ausDaysLeftUntilTarget);
                        var options = { year: 'numeric', month: 'long', day: 'numeric' };
                        var ausEstimatedTargetDate = ausEstimatedTarget.toLocaleDateString("en-US", options);

                        // Creating function to display National Data 
                        function renderAusData() {
                            document.querySelector(".national-data .second-dose-pct").innerHTML = ausSecondDosePct;
                            document.querySelector(".national-data .first-dose-pct").innerHTML = ausFirstDosePct;  
                            document.querySelector(".national-data .eta").innerHTML = "ETA: " + ausEstimatedTargetDate;    
                            if (ausDaysLeftUntilTarget <= 0) {  
                                // If days left reaches 0, render a tick mark displaying target completion
                                document.querySelector(".national-data .days-left").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="200" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg>';
                            } else {
                                document.querySelector(".national-data .days-left").innerHTML = ausDaysLeftUntilTarget;
                            }
                        }

                        // Populating the DOM with National Data by default on the landing page
                        renderAusData();

                        // Rendering the Chart for  2nd dose % across age ranges in Australia
                        renderAusChart([ausSecondDosePct, ausSecondDosePctOver50, ausSecondDosePctOver70]);

                        // Function that takes in region name from clicked button to calculate days left till target and estimated target date for that state/region
                        function calculateDaysLeftAndDate(region) {
                            let daysLeftUntilTarget = Math.ceil(dataVariablesByRegion[`${region}`][3] / dataVariablesByRegion[`${region}`][2]);
                            
                            let estimatedTarget = new Date(urlDate);
                            estimatedTarget.setDate(estimatedTarget.getDate() + daysLeftUntilTarget);
                            var options = { year: 'numeric', month: 'long', day: 'numeric' };
                            var estimatedTargetDate = estimatedTarget.toLocaleDateString("en-US", options);
                            
                            // Passing required data as arguments to a function that will populate the DOM with all the regional data
                            showData(region, daysLeftUntilTarget, estimatedTargetDate)
                        }                        
                                                
                        // Function that populates the DOM with the selected region's data
                        function showData(region, daysLeftUntilTarget, estimatedTargetDate) {
                            document.querySelector(".national-data").style.display = "none";
                            document.querySelector(".state-data").style.display = "none";

                            if (region === "aus") {
                                document.querySelector(".national-data").style.display = "grid";  
                                document.querySelector(".container > .states-container").style.display = "block";
                                document.querySelector(".states-container").style.display = "block";

                                // Populating the DOM with national data
                                renderAusData();
                                
                                // Refreshing the chart canvas before rendering the national chart so that chart animations load during all instances
                                document.querySelector(".national-data .chart").innerHTML = "";
                                document.querySelector(".national-data .chart").innerHTML = "<canvas class='ausChart' height='20' width='100'></canvas>";
                                
                                // Rendering the Chart for 2nd dose % across age ranges in Australia
                                renderAusChart([ausSecondDosePct, ausSecondDosePctOver50, ausSecondDosePctOver70]);

                            }
                            else {
                                document.querySelector(".state-data").style.display = "grid";
                                document.querySelector(".container > .states-container").style.display = "none";
                              
                                // Disabling the selected state's button in the newly positioned states container
                                document.querySelectorAll("button").forEach(button => {
                                    if (button.innerHTML === region.toUpperCase()) {
                                        button.disabled = true;
                                    }
                                });

                                // Populating the DOM with the selected state's data
                                document.querySelector(".state-data .state-name").innerHTML = region.toUpperCase(); 
                                document.querySelector(".state-data .second-dose-pct").innerHTML = dataVariablesByRegion[region][0];
                                document.querySelector(".state-data .first-dose-pct").innerHTML = dataVariablesByRegion[region][1]; 
                                document.querySelector(".state-data .eta").innerHTML = "ETA: " + estimatedTargetDate;
                                if (daysLeftUntilTarget <= 0) {  
                                    // If days left reaches 0, render a tick mark displaying target completion
                                    document.querySelector(".state-data .days-left").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="200" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg>';
                                } else {
                                    document.querySelector(".state-data .days-left").innerHTML = daysLeftUntilTarget;
                                }
                            
                                // Refreshing the chart canvas before rendering the selected state's chart so that chart animations load during all instances
                                document.querySelector(".state-data .chart").innerHTML = "";
                                document.querySelector(".state-data .chart").innerHTML = "<canvas class='stateChart' height='20' width='100'></canvas>";

                                // Rendering the Chart for 2nd dose % across age ranges in selected region/state  
                                renderStateChart([dataVariablesByRegion[region][0], dataVariablesByRegion[region][4], dataVariablesByRegion[region][5]], region.toUpperCase());
                            }
                        }                        

                        // Calling a function on click of a state/region's button
                        document.querySelectorAll("button").forEach(button => {
                            button.onclick = function() {
                                // Disabling the clicked region's button, and undisabling it when a different region's button is clicked
                                button.disabled = true;
                                btnClickedRegion = this.dataset.region;
                                document.querySelectorAll("button").forEach(button => {
                                    if (button.dataset.region != btnClickedRegion) {
                                        button.disabled = false;
                                    }
                                })

                                // Calling function that takes in region name from clicked button to calculate days left till target and estimated target date for that state/region
                                calculateDaysLeftAndDate(this.dataset.region);
                            }
                        });
                    }) 
            })
    });