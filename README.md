# curriculum.idsucla.org
 
# Introduction to Data Science Curriculum v_5.0

## MkDocs Commands

* `mkdocs build` - Build the documentation site.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs gh-deploy` - deploy the repo to curriculum.idsucla.org

For full documentation visit [mkdocs.org](https://mkdocs.org).
* `mkdocs help` - Print this help message.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
    site/
        ...       # Generate website
		
## Steps for manager

* Download and install Visual Studio Code at https://code.visualstudio.com/ also Github Desktop, IDS Tech will do configuration

* Start Github Desktop. 

	1. Switch Current Repository at the top left corner to IDSUCLA/curriculum or curriculum
	
	2. Switch Current Branch to master
	
	3. Click Refresh Icon/Fetch Origin, then Pull Origin if you see downloadable icon. 
	
* Start Visual Studio Code.
	
	1. File -> Open -> Documents/Github/Curriculum
	
	2. Terminal -> New terminal
	
	3. YOUR FILE EDIT
	
	4. mkdocs serve in Terminal (To View Your change)
	
	5. mkdocs gh-deploy in Terminal (To Publish Your change of website)

* Go Back to Github Desktop. 

	1. Commit
	
	2. Push (To Publish Your change of source code)