##**Campaign Guidelines – Time Use**

###**1. The Issue:**
There have been many reports lately about people spending a large amount of time interacting with
technology and the Internet. This raises some questions about time use:

1) How do I spend my time?

2) Are there groups that spend more time on certain activities than other groups?

3) How is my time use similar or different to other Americans?

###**2. Objectives:**
Upon completing this campaign, students will have compared themselves to the U.S. population to
find whether they are similar in some ways and different in other ways. They will use
single and multivariable plots, summary statistics, and frequency tables to find similarities and
differences between groups of students and between students and other residents of the United
States.

###**3. Survey Questions:** (students will enter data for the activities in which they participated):

**Consider Data:** The categories below are similar to the categories found in the American Time Use Survey (ATUS), which provides nationally representative estimates of how Americans spend their time. Having similar variables allows students to compare the way they spend their time to the official ATUS dataset. Before students begin collecting data, it is important to discuss different activities in their day and how they might be classified. A class consensus of the meaning of the variables must be reached so that proper analysis and interpretations can be made. 

**Note:** Students cannot double dip their time. For example, if they read during class, then those minutes spent reading do not count towards “read” but instead toward “school”. Below are the definitions of some of the variables in the ATUS documentation.

`socialize` - This category includes face-to-face social communication and hosting or attending social functions.

`consumer purchases` - This includes time spent purchasing or renting consumer goods (regardless of whether it was in person, online, via telephone, at home, or in store).

**Note:** The ATUS variable `leisure` combines many activities in which people might participate (such as watching television, reading, relaxing or thinking, playing computer, board, or card games, using a computer or the Internet for personal interest, playing or listening to music, and attending arts, cultural, and entertainment events). We have opted to list specific leisure activities that high school students might be more likely to engage in and made them separate variables.


| **Prompt**                                                          |**Variable**| **Data Type**                   |
|---------------------------------------------------------------------|------------|---------------------------------|
| For which day are you collecting data?                              | day        | ordinal category (integers 1-10) |                        |
| What activities did you participate in?                             | activities | n/a                             |
| a. How many MINUTES did you sleep?                                  | sleep      | number                          |
| b. How many MINUTES did you spend eating/drinking?                  | meals      | number                          |
| c. How many MINUTES did you spend in classes at school?             | school     | number                          |
| d. How many MINUTES did you spend doing homework?                   | homework   | number                          |
| e. How many MINUTES did you spend working at a job?                 | work       | number                          |
| f. How many MINUTES did you spend grooming yourself?                | grooming   | number                          |
| g. How many MINUTES did you spend traveling/commuting?              | travel     | number                          |
| h. How many MINUTES did you spend doing household chores?           | chores     | number                          |
| i. How many MINUTES did you spend watching television (including streaming)? | television    | number                          |
| j. How many MINUTES did you spend playing video games?              | videogames | number                          |
| k. How many MINUTES did you spend participating in sports/exercise/physical activity?             | sports | number                          |
| l. How many MINUTES did you spend reading (not for class)?          | read       | number                          |
| m. How many MINUTES did you spend communicating (includes texting, emails, video and voice calls)?         | communicate       | number                          |
| n. How many MINUTES did you spend socializing (outside of class, in person)?          | socialize       | 
| o. How many MINUTES did you spend on a spiritual activity?         | spiritual   | 
| p. How many MINUTES did you spend purchasing items online or in a store?         | purchases       | 
| q. How many MINUTES did you spend on hobbies/volunteering/leisure/extra-curricular activities (excluding sports and physical activity)?          | extra       | 
| r. How many MINUTES did you spend on social media?          | social_media       | 
| AUTOMATIC                                                           | location   | lat, long                       |
| AUTOMATIC                                                           | time       | time                            |
| AUTOMATIC                                                           | date       | date                            |

**When should you take the survey?** It is recommended that students keep a log of their time and submit one survey at the end of each day, accounting for every minute of each day of the campaign. It might be helpful to split the log into three intervals where students pause and think about what they did before school, after school and in the evening. Once the log is complete and accounts for all 1,440 minutes of their day, students should then submit the survey corresponding to that day.

**How long should the campaign last?** At least five days (maximum of ten days). Ideally, two of these days would include a weekend.

###**4. Motivation:**
Use the interactive graphic titled *How Men and Women Spend Their Time* found at: [https://flowingdata.com/2021/09/21/how-men-and-women-spend-their-days/](https://flowingdata.com/2021/09/21/how-men-and-women-spend-their-days/ "https://flowingdata.com/2021/09/21/how-men-and-women-spend-their-days/")

After the first day, monitor the data collection and ensure that each student has submitted a survey for Day 1. Continue monitoring for the remainder of the campaign.

Discuss data collection issues. What makes it hard? Does this affect the quality of data?

###**5. Technical Analysis:**
RStudio and American time use interactive graphic.

Single/Multivariable plots: histograms, bar graphs, scatterplots, etc.

Numerical summaries: mean, median, MAD, standard deviation. 

Frequency tables: One and two-way tables.

###**6. Guiding Questions:**
1) On average, how long do students think they spend on homework?

2) Are there certain activities that take up most of the time in our day?

3) Are there groups of students who spend their time similarly to one another?

###**7. Report:**
Students will complete a practicum in which they answer a statistical investigative question based on the time-use data collected.

