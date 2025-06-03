##***<u>Lab 3E - Scraping web data</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**The web as a data source**
* The internet contains huge amounts of information.

    – Using computers to gather this information in an automated fashion is referred to as *scraping
web data*.

    – Scraping data from the web can be difficult because each website displays & stores data
differently.

* In this lab, we'll learn how to scrape data in two steps:

    – Step 1: Gather information from the web.

    – Step 2: Clean it up and turn it into a usable data frame for [```Lab 3F```](lab3f.md).

###**Our first web scraper**
* <span style="color:midnightblue;">**Copy and paste the link below into a web browser to view the website of data we'd like to *scrape*
and analyze.**</span><br>
    [https://labs.thinkdataed.org/extras/webdata/mountains.html](https://labs.thinkdataed.org/extras/webdata/mountains.html "https://labs.thinkdataed.org/extras/webdata/mountains.html"){:target="_blank"}

* <span style="color:firebrick;">**(1) Briefly describe what the data on the website is about.**</span>

* <span style="color:firebrick;">**(2) Write down 3 questions you'd be interested in answering by analyzing this data.**</span>

###**HTML**
* ```HTML``` is the code that's used to render every website you've ever visited.

* The following slide shows the ```HTML``` code used to create the first two rows of the web data.

    – <span style="color:firebrick;">**(3) How is the data table in ```HTML``` different than the data tables we're used to seeing in
    ```R```, for example, when we use the ```View()``` function?**</span>

    – <span style="color:firebrick;">**(4) What do you think the *tags* ```<TABLE>```, ```<TR>```, ```<TH>```, ```<TD>``` mean? How does ```HTML``` use
    these *tags* to display the table?**</span>

```
<TABLE>
    <TR>
        <TH>peak</TH>
        <TH>range</TH>
        <TH>state</TH>
        <TH>long</TH>
        <TH>lat</TH>
        <TH>elev_ft</TH>
        <TH>elev_m</TH>
        <TH>prominence_ft</TH>
        <TH>prominence_m</TH>
        <TH>rank</TH>
    </TR>
    <TR>
        <TD>Denali (Mount McKinley)</TD>
        <TD>Alaska Range</TD>
        <TD>Alaska</TD>
        <TD>-151.0063</TD>
        <TD>63.0690</TD>
        <TD>20236</TD>
        <TD>6168</TD>
        <TD>20174</TD>
        <TD>6149</TD>
        <TD>1</TD>
    </TR>
</TABLE>
```

###**Get to scraping!**
* <span style="color:midnightblue;">**Use your browser to go back to the website with the data we're interested in scraping.**</span>

* <span style="color:midnightblue;">**Find the URL address for the site and assign it the name ```data_url``` in ```R```.**</span>

* <span style="color:firebrick;">**(5) Then fill in the blanks below to have ```R``` scrape *every* web table available on the site:**</span>

        tables <- readHTMLTable(____)

###**Find our data**
* Since ```readHTMLTable()``` scrapes *every* table that is on a particular web URL, we need to find out
which table has the data we're interested in.

    – For example, ```wikipedia.org``` often has articles with 3 or more tables.

    – This means we need to check all 3 tables to find the one we're interested in.

* <span style="color:firebrick;">**(6) Write and run code using the ```length()``` function to find out how many tables of data were scraped in our set of ```tables```.**</span>

###**Saving tables**

* Now that we know how many tables we've scraped, we can go back and scrape individual tables
by adding the which argument to the ```readHTMLTable()``` function.

* <span style="color:firebrick;">**(7) Write and run code using ```readHTMLTable()``` to re-scrape the data from the web but this time use the ```which``` argument to scrape just the individual table.**</span>

    – The ```which``` argument should be the integer denoting which table you want scraped.

    – Assign the scraped data the name ```mtns```.

###**Check, save and use!**
* After scraping the data, the only thing left to do is to save it and use it.

* <span style="color:firebrick;">**(8) Fill in the blanks to save the data and give it a file name.**</span>

        save(____, file = "____.Rda")

* <span style="color:firebrick;">**(9) What is the mean and standard deviation of ```elev_ft```?**</span>

* <span style="color:firebrick;">**(10) Which ```state``` has the most mountains in our data?**</span>