# automation_practice

## Installation
This practice is tested on **Node v10.16.0**.  While earlier versions of nodejs may be compatible, they have not been tested or verified.

### 1. Install required Software

- JDK 1.8+
- NodeJS (version is equal or greater than v10.16.0)

You can download these software directly from our google drive and then install them on your computer
https://drive.google.com/open?id=1_v8ZQkK7aSANTh6aOtyCu8qQb8eyDnrj

Or, download them from their websites.

`JDK 1.8:` Install JDK 1.8+. JAVA is require to start `Selenium Server` nothing else. https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

`Node.JS:` Install from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

### 2. Install packages for practice

1. Open Terminal and `cd` to `automation-practice` repository.
2. Run the command `npm install` to install dependencies packages<br/>
3. That's all.

### 3. Update TESTING_HOST (Garoon Testing URL)

1. Open file `wdio.conf.js` by any your IDE or Text Editor, such as PhpStorm, Notepad++, ... 
2. Update the value of the variable `process.env.TESTING_HOST`. (This value will be provided in the workshop)
3. Follow the section `How to run tests` to make sure your installation is correct. 

## How to run tests

Firstly, opening a terminal and `cd` to `automation-practice` repository, then execute below command:

#### Run acceptance testing
The below command will execute all spec files - with extension is '*.spec.js' - in folder 'acceptance/src/\*\*/test-specs/\*\*/\*.spec.js'

``` 
npm test ./acceptance/wdio.conf.js
```

#### Run testing with the specific suite
``` 
npm test ./acceptance/wdio.conf.js -- --suite demo
```

#### Run acceptance testing with the specific spec file
``` 
npm test ./acceptance/wdio.conf.js -- --spec src/demo/test-specs/login-onpremise.spec.js
```

#### Run RestAPI testing

The below command will execute all spec files - with extension is '*.spec.js' - in folder 'rest-api/src/\*\*/test-specs/\*\*/\*.spec.js'
``` 
npm test ./rest-api/wdio.conf.js
```
