# curriculum.thinkdataed.org
 
# Introduction to Data Science Curriculum v_5.0

## MkDocs Commands

* `mkdocs build` - Build the documentation site.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs gh-deploy` - deploy the repo to curriculum.thinkdataed.org
* `mkdocs -h` - Print this help message.

* Alternatively

* `python3 -m mkdocs build` - Build the documentation site.
* `python3 -m mkdocs serve` - Start the live-reloading docs server.
* `python3 -m mkdocs gh-deploy` - deploy the repo to curriculum.thinkdataed.org
* `python3 -m mkdocs -h` - Print this help message.

For full documentation visit [mkdocs.org](https://mkdocs.org).

## Project layout

    mkdocs.yml    # main config file.
    docs/         # source code folder
	    IDS_Curriculum_v_5.0/     		# pdf files	(for download and preview)
        XX.md     # a page for a lesson.
        ...       # Other markdown pages, images and other files.
    site/         # Generated website folder
		
	
## Steps for manager

* Download and install Visual Studio Code at https://code.visualstudio.com/ also Github Desktop, IDS Tech will do configuration

* Start Github Desktop. 

	1. Switch Current Repository at the top left corner to IDSUCLA/curriculum or curriculum
	
	2. Switch Current Branch to master
	
	3. Click Refresh Icon/Fetch Origin, then Pull Origin if you see downloadable icon. 
	
* Start Visual Studio Code.
	
	1. File -> Open -> Documents/Github/Curriculum
	
	2. Terminal -> New terminal
	
	3. git pull in Terminal (Alternative to 'Start Github Desktop' Section)
	
	4. YOUR FILE EDIT
	
	5. mkdocs serve in Terminal (To View Your change)
	
	6. mkdocs gh-deploy in Terminal (To Publish Your change of website)
	
	7. git push in Terminal (To Publish Your change of source code)

* Alternatively, Go Back to Github Desktop. 

	1. Commit->Push (To Publish Your change of source code)
	
## Note

This note is available at repo https://github.com/IDSUCLA/curriculum