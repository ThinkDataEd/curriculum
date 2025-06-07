##**Campaign Guidelines – Stress/Chill**

###**1. The Issue:**

People report being more and more stressed every day. This trend is extending beyond adults, it is
also reported by children and teenagers. The amount of work for which people are responsible has
been increasing. To understand what makes us feel stressed, some important questions to ask are:

1) What factors affect my stress/chill level?

2) Do different personality types have different things that make them happy/sad?

3) Do you like to be alone or with people?

4) Is your stress/chill level a function of the environment in which you are in?

###**2. Objectives:**

Upon completing this campaign, students will have compared groups and gained an understanding of
variability within and between groups. They will have learned how to conduct and use permutations to
model variability, perform informal inference, and how to do simulations to make predictions.

###**3. Survey Questions:**

Use a random number generator to generate two random times a day for the next 6 days, including a
weekend if possible. It is recommended that you create 6 sets of random numbers so that students are polled at different times each day. If a time falls within the school day, it is up to the discretion of the teacher to use
this time or not.

| **Prompt** | **Variable** | **Data Type** |
| ---------- | ---------- | ---------- |
|Where are you?<br>&nbsp;&nbsp;&nbsp;&nbsp; -school<br>&nbsp;&nbsp;&nbsp;&nbsp; -work<br>&nbsp;&nbsp;&nbsp;&nbsp; -home<br>&nbsp;&nbsp;&nbsp;&nbsp; -public place<br>&nbsp;&nbsp;&nbsp;&nbsp; -others’ house<br>&nbsp;&nbsp;&nbsp;&nbsp; -commuting|where|categorical|
|Why are you here (in one word)?|why|text|
|How many people are you with (not counting yourself)?|howmanypeople|integer|
|Who are you with?<br>&nbsp;&nbsp;&nbsp;&nbsp; -alone<br>&nbsp;&nbsp;&nbsp;&nbsp; -friends and/or family<br>&nbsp;&nbsp;&nbsp;&nbsp; -teachers and classmates<br>&nbsp;&nbsp;&nbsp;&nbsp; -strangers<br>&nbsp;&nbsp;&nbsp;&nbsp; -coworkers|who|categorical|
|How stressed are you feeling right now (3 is very stressed, 0 is not stressed at all)?|stress|integer|
|AUTOMATIC|location|lat, long|
|AUTOMATIC|time|time|
|AUTOMATIC|date|date|

**When?** Surveys are taken two to three times per day at pre-determined randomly selected times.

**How long?** About two weeks. Ideally, two of these days include a weekend.

###**4. Motivation:**

Students must understand that they need to keep collecting data. Use the Plot App to look at the data
after the first day and have a discussion.

Ask: Why were most people stressed? Guide students along the way.

Ask students to predict the following: What is your stress/chill level in the evening versus morning?
Does it change everyday? How about during the weekend? What is the difference between groups?

Data collection: After the first day, use the Campaign Monitoring tool to see who has collected the
most data.
    
###**5. Technical Analysis:**
Students will use RStudio.

###**6. Guiding Questions:**

1) Have students generate predictions and check up on their predictions.

2) What’s the typical stress/chill level of the class across the campaign?

3) What’s my typical stress/chill level and how does it compare to the whole class?

4) Do the stress/chill levels vary by weekday or weekend or the type of people you are with?

5) Under which conditions is my stress/chill level affected?

6) Encourage students to generate their own questions.

###**7. Report:**
Students will complete the Stress/Chill Practicum. They will analyze their stress/chill data using data
analysis skills and RStudio skills learned in the unit.







