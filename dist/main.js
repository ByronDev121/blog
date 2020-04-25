(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div *ngIf=\"showScroller\" class=\"progress-container\">\r\n    <div class=\"progress-bar\" id=\"myBar\"></div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"removeFooter()\"></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-one/article-one.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-one/article-one.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container tim-container\">\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Introduction</h1>\n            <br />\n        </div>\n        <div class=\"grid\">\n            <div>\n                <p class=\"article-text\">\n                    During 2019 and 2020 I was contracted as a Mobile Software Engineer to develop a mobile application\n                    to\n                    digitalize and streamline the contravention issuing process in Cape Town city. The Contraventions\n                    application project was started in 2017 and is built in Ionic 3 which leverages Angular 5 as the web\n                    framework.\n\n                    Ionic 3 was released on 05 April 2017, this version of ionic was originally released with\n                    Angular 4. Angular 5 was released on 01 November 2017 and on 08 November 2017 Ionic 3.9.0 was\n                    released\n                    with support for Angular 5.\n                </p>\n            </div>\n\n            <div style=\"text-align: center;\">\n                <img style=\"height: 400px; width:auto;\" src=\"assets/img/contra.png\">\n            </div>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                The app was required by the contract for long term support. Since some of the defects in the app were\n                related to deprecated dependencies (rxjs, ionic-file-plugin, material-design-upgrades). The mobile\n                development team decided it would be best to update it to Ionic 5 / Angular 8, where i was appointed as\n                the engineer to tackle the task.\n            </p>\n        </div>\n        <br />\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Motivation</h1>\n            <br />\n        </div>\n\n        <div class=\"grid-two\">\n            <div style=\"text-align: center;\">\n                <img style=\"height: 300px; width:auto;\" src=\"assets/img/motivation.png\">\n            </div>\n            <div>\n                <p class=\"article-text\">\n                    The latest version of Ionic, Ionic 5 was released on 11 February 2020 which leverages Angular 8\n                    which\n                    was released on 28 May 2019. These releases include new features that make the applications run\n                    faster,\n                    smoother and easier to use.\n                </p>\n            </div>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                Overall the main reasons for making the change from Ionic 3 and Angular 5 to Ionic 5 and Angular 8 are:\n            </p>\n            <ul>\n                <li>\n                    <p class=\"article-text\">\n                        Official support from Ionic\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Official support from Angular(Google)\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Mitigate risk of using deprecated technology\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Improved performance\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Access to latest functionality and styling\n                    </p>\n                </li>\n            </ul>\n        </div>\n\n\n        <br />\n\n        <div class=\"grid\">\n            <div class=\"title\">\n                <h1 style=\"font-weight: 500;\">Ionic</h1>\n                <br />\n            </div>\n            <div style=\"text-align: center;\">\n                <img style=\"height: 150px; width:auto;\" src=\"assets/img/ionic-logo.jpg\">\n            </div>\n        </div>\n\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Official support</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                From the official support documentation, Ionic will end support for version 3 on 11\n                August 2020. Thus all future development may be compromised. This will mean that Ionic will no longer\n                release updates for version 3 and if there is a bug with the framework which effects development we will\n                have no choice but to upgrade at that time which may add further complexity as the application matures.\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                During development we faced an issue with the @ionic-native/file plugin. Which hangs when calling the\n                file.writeFile() method which never returns. Research revealed that there was a bug in the plugin and\n                there commended solution from the Ionic team was to use a newer version of the plugin which, in our case\n                required an update of @ionic-native/core.\n            </p>\n        </div>\n        <div>\n            <p class=\"article-text\">\n                Upgrading the development framework during development phase will ensure that the application will be\n                supported throughout development and mitigate risk of running into more issues.\n            </p>\n        </div>\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Upgrades</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                A few of the most notable enhancements from Ionic 3 to Ionic 5 are:\n            </p>\n            <ul>\n                <li>\n                    <p class=\"article-text\">\n                        Updated dependencies to latest stable, major issues and bugs were resolved.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Cleaner navigation logic across the app (Leverages Angular router for navigation - Better\n                        performance).\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Performance benefits and other features that are available out of box (service worker,\n                        web-worker, environment config, build configs, custom configuration hooks etc). A study showed\n                        that after a legacy application was migrated from ionic 3 to ionic 4 it boasted a 300% increase\n                        in performance.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        More Angular leveraging and less legacy Ionic (More Angular also means access to a larger\n                        community and support. Therefore, improved code maintainability).\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Updated UI component library.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Sateful live reload to improved development speed and experience.\n                    </p>\n                </li>\n            </ul>\n        </div>\n\n\n        <br />\n\n\n        <div class=\"grid\">\n            <div class=\"title\">\n                <h1 style=\"font-weight: 500;\">Angular</h1>\n                <br />\n            </div>\n            <div style=\"text-align: center;\">\n                <img style=\"height: 150px; width:auto;\" src=\"assets/img/angular2-logo.png\">\n            </div>\n        </div>\n\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Official support</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                From the official documentation, Angular supports all major versions for 18\n                months after the release date. Therefore, Angular stopped support for Angular 5 in May 2019. Support for\n                Angular 8 will continue until 28 November 2020. Migrating to the later version of Angular will mitigate\n                compromising development and using deprecated and unsupported technology.\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                One issue the development team faced with developing in Angular 5 presented itself when a requirement\n                came from stakeholders to use a calendar style date picker. Which in Angular would be best implemented\n                using @angular/material. Angular material has a dependency on RxJS 6. Since Angular 5 uses RxJS 5\n                implementing the calendar style date picker proved close to impossible without upgrading to a later\n                version of the web framework.\n            </p>\n        </div>\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Upgrades</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                A few of the most notable enhancements from Angular 5 to Angular 8:\n            </p>\n            <h4 style=\"font-weight: 600;\">Angular 6</h4>\n            <br />\n            <ul>\n                <li>\n                    <p class=\"article-text\">\n                        This release is focused less on the underlying framework, and more on tool-chain and on making\n                        it easier to move quickly with angular in the future.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        No major breaking changes.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Dependency on RxJS 6 (this upgrade have breaking changes but CLI command helps in migrating from\n                        older version of RxJS). Synchronizes major version number of the:\n                    </p>\n                    <div>\n                        <ul>\n                            <li>\n                                <p class=\"article-text\">\n                                    Angular framework\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    Angular CLI\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    Angular Material + CDK\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        CLI Changes: Two new commands have been introduced.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        CLI + Material starter templates: Let angular create code snippet for your basic components.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Generates Data Table with sorting, filtering & pagination.\n                    </p>\n                </li>\n            </ul>\n\n            <h4 style=\"font-weight: 600;\">Angular 7</h4>\n            <br />\n            <ul>\n                <li>\n                    <p class=\"article-text\">\n                        This is a major release and expanding to the entire platform including:\n                    </p>\n                    <div>\n                        <ul>\n                            <li>\n                                <p class=\"article-text\">\n                                    Core framework\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    Angular Material\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    CLI\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        CLI Prompts: The CLI will now prompt users as when running common commands like ng new or ng add\n                        @angular/material with the intend of getting aid for building a new project using SCSS.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Angular 7 added a new compiler - Compatibility Compiler (ngcc)\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Angular 7 now supporting to TypeScript 2.9.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Added a new elements features - enable Shadow DOM v1 and slots.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Added a new router features - Warn if navigation triggered outside Angular zone.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Added a new ability to recover from malformed URLs.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Added a new compiler support dot (.) in import statements and also avoid a crash in ngc-wrapped.\n                    </p>\n                </li>\n            </ul>\n\n            <h4 style=\"font-weight: 600;\">Angular 8</h4>\n            <br />\n            <ul>\n                <li>\n                    <p class=\"article-text\">\n                        Being smaller, faster and easier to use and it will be making Angular developers life easier.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Support for TypeScript 3.2\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Added a Navigation Type Available during Navigation in the Router\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Allow passing state to routerLink Directives and NavigationExtras in the Router\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Restore the whole object when navigating back to a page managed by Angular Router.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Support for SASS.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Predicate function mode for runGuardsAndResolvers.\n                    </p>\n                </li>\n                <li>\n                    <p class=\"article-text\">\n                        Performance Improvements on the core, more consistent about “typeof checks”\n                    </p>\n                </li>\n            </ul>\n        </div>\n\n\n        <br />\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Migration Preparation</h1>\n            <br />\n        </div>\n\n        <div style=\"text-align: center;\">\n            <img style=\"height: 300px; width:auto;\" src=\"assets/img/planning.jpg\">\n        </div>\n\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Do your research</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                There is fantastic documentation available to learn about Ionic 5 and Angular 8. Ionic maintains\n                maintains official documentation on migrating.\n\n                There are many great articles on how to use Angular and Ionic. Trversey Media has great getting started\n                tutorials to help upskill with the latest version of the frameworks.\n            </p>\n        </div>\n        <br />\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Prepare current app version</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                Complete all outstanding code refactors for the current app. This will make the migration easier manage.\n                Remove all deprecated and obsolete code. Make use of latest es6 syntax (e.g. async await for promises).\n                Lastly make sure all dependencies are up-to-date.\n            </p>\n        </div>\n\n\n        <div class=\"title\">\n            <h4 style=\"font-weight: 600;\">Plan your time</h4>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                In the next section we'll discuss time estimated time frames of the migration in more detail, but this\n                is a rather lengthly task. Make sure you give yourself enough time to perform the migration and\n                formulate your plan of attack.\n            </p>\n        </div>\n\n\n        <br />\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Migration & Rollback Strategy</h1>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                Ionic and Angular maintain official documentation of the recommended strategy when migrating to the\n                latest framework. The official strategy will be\n                followed to migrate the contraventions application to the latest version of the Ionic framework.\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                In order to mitigate risk of breaking the current functionality of the application in Ionic 3. I created\n                a new project and pushed to a separate github repository. Therefore in the event where the\n                development may be required to roll back to the previous version, the development team can revert back\n                to the existing code base in the current repository.\n            </p>\n        </div>\n        <br />\n        <div class=\"grid\">\n\n            <div>\n                <div>\n                    <p class=\"article-text\">\n                        From a case study where an existing application was migrated from Ionic 3 to Ionic\n                        4. Where the application consisted of:\n                    </p>\n                    <div>\n                        <ul>\n                            <li>\n                                <p class=\"article-text\">\n                                    15 pages\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    15+ components\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    10+ services\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n                <br />\n                <div>\n                    <p class=\"article-text\">\n                        The development effort accumulated to a total of 40 development hours. Since the contraventions\n                        application consists of:\n                    </p>\n                    <div>\n                        <ul>\n                            <li>\n                                <p class=\"article-text\">\n                                    25 pages\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    10 components\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    46 models\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    29 services\n                                </p>\n                            </li>\n                            <li>\n                                <p class=\"article-text\">\n                                    34 plugins\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"text-align: center;\">\n                <img style=\"height: 350px; width:auto;\" src=\"assets/img/implement.jpg\">\n            </div>\n\n        </div>\n        <p class=\"article-text\">\n            The accumulated development effort is estimated to a total of 60-80 development hours.\n        </p>\n\n\n        <br />\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Migration Results</h1>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                TODO: Here I would like to measure the performance benefits. (Have not finished the migration yet)\n            </p>\n        </div>\n        <br />\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-two/article-two.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-two/article-two.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container tim-container\">\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Introduction</h1>\n            <br />\n        </div>\n        <div>\n            <p class=\"article-text\">\n                Depth-first search (DFS) is an algorithm for traversing tree or graph data structures. The algorithm\n                starts at the root (or any other) node and explores as far as possible along each branch before\n                backtracking. DFS is an algorithm that is often used in software engineering and commonly used as a part\n                of white boarding questions during technical interviews. In this article we'll look at a practical\n                example of implementing DFS for a flat tree array.\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                The Depth-first search algorithm follows 3 basic steps:\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text ml-3\">\n                <strong>Step 1</strong> − Visit the adjacent unvisited vertex/node. Mark it as visited and push it\n                in a stack.\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text ml-3\">\n                <strong>Step 2</strong> − If no adjacent vertex/node is found, pop up a vertex/node from the\n                stack. (It will pop up all the vertices from the stack, which do not have adjacent vertices/nodes.)\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text ml-3\">\n                <strong>Step 3</strong> − Repeat Rule 1 and Rule 2 until the stack is empty.\n            </p>\n        </div>\n\n\n        <br />\n\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">First Things First</h1>\n            <br />\n        </div>\n\n        <h4 style=\"font-weight: 600;\">What is a tree?</h4>\n\n        <div style=\"text-align: center;\">\n            <img style=\"height: 300px; width:auto;\" src=\"assets/img/confused-tree.png\">\n        </div>\n\n        <div>\n            <p class=\"article-text\">\n                I'm sure most of you know what a tree data structure is, but for those that don't, a tree structure is a\n                nonlinear hierarchical data structure with a root value and subtrees of children with a parent node,\n                represented as a set of linked nodes.\n            </p>\n        </div>\n        <br />\n\n        <div style=\"text-align: center;\">\n            <img style=\"height: 300px; width:auto;\" src=\"assets/img/tree-data-structure.png\">\n        </div>\n\n        <div>\n            <p class=\"article-text\">\n                A practical example of a tree structure is an array of categories where, apart from the root\n                category(s), each category has a parent category. In this scenario each category is represented as a\n                node in the image above. Suppose each category contained products which must belong to/be a child of,\n                a category, the products are represented by leaf nodes. There are two formats this tree can\n                take. The tree could either be 'nested', where each subtree is contained within the parent. The tree\n                could also be 'flat', where flat tree structure can be represented by an array of objects where an\n                \"parent ID\" property defines the tree hierarchy.\n            </p>\n        </div>\n        <br />\n\n        <div class=\"title\">\n            <h1 style=\"font-weight: 500;\">Let's Get Into Some Code</h1>\n            <br />\n        </div>\n\n        <div>\n            <p class=\"article-text\">\n                In this article we will look at implementing DFS for flat tree data structures using the category\n                example above. Let's suppose we're building an e-commerce application in Angular. We query the API for\n                the products and product categories. The API returns a flat tree data structure for both products and\n                categories. Let's say there is a requirement to only display the categories where either that category\n                or one of its children contains a product. This is the perfect scenario to leverage DFS to solve the\n                problem.\n            </p>\n        </div>\n        <br />\n\n        <div>\n            <p class=\"article-text\">\n                My strategy is to execute DFS on each node in a level as the user progresses through the category tree,\n                starting at the root node. To fulfill the requirement our DFS implementation needs to determine whether\n                the current node contains a product. If not, traverse the tree, and query this condition for its\n                children, whereby each child category is explored before the current category is popped off from the\n                stack. If a product is found the category can be displayed, otherwise, the category cannot be displayed.\n                Following the 3 steps of DFS, we obtain:\n            </p>\n        </div>\n        <br />\n\n        <pre style=\"font-size: large;\">\n            <code [highlight]=\"codeSnippetOne\" (highlighted)=\"onHighlight($event)\" [lineNumbers]=\"true\"></code>\n        </pre>\n\n        <div>\n            <p class=\"article-text\">\n                The code solution above is pretty good. Keeping space complexity in mind I have favored loops over\n                recursion. However, there are still a few things we can do to make this implementation more efficient.\n                Looking at the time complexity of the code you'll notice that breaking out of the loops once a product\n                is found will greatly reduce the computational overhead since the algorithm stops the\n                traversal once the condition is satisfied. Furthermore, a simple stack data-structure can be used over\n                using an array. Since the stack is much more lightweight than an array this further increases\n                performance.\n            </p>\n        </div>\n        <br />\n\n        <div>\n            <p class=\"article-text\">\n                Custom simple stack data structure:\n            </p>\n        </div>\n\n        <pre style=\"font-size: large;\">\n            <code [highlight]=\"codeSnippetTwo\" (highlighted)=\"onHighlight($event)\" [lineNumbers]=\"true\"></code>\n        </pre>\n\n        <div>\n            <p class=\"article-text\">\n                The optimized DFS algorithm then becomes:\n            </p>\n        </div>\n\n        <pre style=\"font-size: large;\">\n            <code [highlight]=\"codeSnippetThree\" (highlighted)=\"onHighlight($event)\" [lineNumbers]=\"true\"></code>\n        </pre>\n\n        <div>\n            <p class=\"article-text\">\n                Awesome! We have a super-fast depth-first search algorithm ready to rock. But what if we need to run DFS\n                on some other kind of tree that is not the same type as category and has a completely different\n                condition to satisfy?\n            </p>\n\n            <p class=\"article-text\">\n                Hmmm... [scratches head...]\n            </p>\n\n            <div style=\"text-align: center;\">\n                <img style=\"height: 300px; width:auto;\" src=\"assets/img/calculating-meme.jpg\">\n            </div>\n\n            <p class=\"article-text\">\n                Well then let's go ahead and put this into a utility service so that other components can gain that\n                functionality. Let's pass in the current node, the flat array, and the condition function as arguments.\n                This way the DFS algorithm is condition and tree agnostic and super-generic. Notice that since the\n                condition function uses this.products we'll have to pass in the instance of the component to the service\n                to give the service access to the products variable when executing the condition function. (Otherwise\n                you could just pass in your condition function, current node and flat tree as arguments).\n            </p>\n        </div>\n        <br />\n        <div>\n            <p class=\"article-text\">\n                Component:\n            </p>\n        </div>\n\n        <pre style=\"font-size: large;\">\n            <code [highlight]=\"codeSnippetFour\" (highlighted)=\"onHighlight($event)\" [lineNumbers]=\"true\"></code>\n        </pre>\n\n        <div>\n            <p class=\"article-text\">\n                Service (e.g. src/app/service/util/util.service.ts):\n            </p>\n        </div>\n\n        <pre style=\"font-size: large;\">\n            <code [highlight]=\"codeLast\" (highlighted)=\"onHighlight($event)\" [lineNumbers]=\"true\"></code>\n        </pre>\n\n        <div>\n            <p class=\"article-text\">\n                Whoop Whoop!!1 There we have it. A super-fast and generic DFS implementation in angular.\n            </p>\n        </div>\n\n        <br />\n\n        <div>\n            <p class=\"article-text\">\n                Cheers, Thanks for reading.\n            </p>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"credits\">\r\n                <span class=\"copyright\">\r\n                    <a class=\"copyright\" style=\"margin-right: -10px;\" href=\"https://appstrax.tech\">Appstrax Technology</a>© {{date | date: 'yyyy'}}\r\n                </span>\r\n            </div>\r\n            <nav class=\"footer-nav ml-auto\">\r\n                <ul>\r\n                    <li><a href=\"#\">Latest Posts</a></li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"logo-container\" href=\"https://www.appstrax.tech\">\r\n                <img *ngIf=\"!appstraxLogo\" class=\"logo navbar-brand\" src=\"assets/img/appstrax-logo-white.png\">\r\n                <img *ngIf=\"appstraxLogo\" class=\"brand-icon\" src=\"assets/img/appstrax-icon.png\">\r\n            </a>\r\n            <div *ngIf=\"appstraxLogo\" class=\"navbar-brand d-flex\">\r\n                <div class=\"mr-1\">\r\n                    AppStrax Tech\r\n                </div>\r\n                <div *ngIf=\"isArticle()\"> — {{article.title}} </div>\r\n            </div>\r\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Find me on GitHub\" data-placement=\"bottom\" href=\"#\">\r\n                        <i class=\"fa fa-home\"> </i>\r\n                        <p class=\"d-lg-none\">Home</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Find me on GitHub\" data-placement=\"bottom\"\r\n                        href=\"https://www.linkedin.com/company/appstrax-technology\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <p class=\"d-lg-none\">GitHub</p>\r\n                    </a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a href=\"\" class=\"nav-link\" target=\"_blank\">\r\n                        <i class=\"nc-icon nc-book-bookmark\"></i>\r\n                        Documentation\r\n                    </a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Welcome</h1>\r\n            <h3>Start reading and upskill in software development</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"title\">Blog Posts</h2>\r\n                    <div class=\"row following\" id=\"follows\">\r\n                        <div class=\"col-md-9 ml-auto mr-auto\">\r\n                            <ul class=\"list-unstyled follows\">\r\n                                <ng-container *ngFor=\"let article of articles\">\r\n                                    <li>\r\n                                        <div class=\"row d-flex\">\r\n                                            <div class=\"m-3\">\r\n                                                <img style=\"height: 50px; width: 50px; object-fit: contain;\"\r\n                                                    [src]=\"article.imgOne\" alt=\"...\">\r\n                                            </div>\r\n                                            <div style=\"max-width: 65%;\">\r\n                                                <h6 style=\"text-align: left;\">{{article.title}}<br />\r\n                                                    <small>{{article.date}}</small>\r\n                                                </h6>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"ml-auto\" style=\"text-align: right;\">\r\n                                            <a\r\n                                                href=\"#/read-article/?id={{article.id}}/slug={{toDashCase(article.title)}}\">\r\n                                                <button class=\"btn btn-outline-default btn-round\">Read</button>\r\n                                            </a>\r\n                                        </div>\r\n                                    </li>\r\n                                    <hr />\r\n                                </ng-container>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section section-dark text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Bloggers</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile card-plain\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#/user-profile\">\r\n                                <img style=\"height: 180px; object-fit: cover;\" src=\"./assets/img/profile.jpg\" alt=\"...\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                            <a href=\"#\">\r\n                                <div class=\"author\">\r\n                                    <h4 class=\"card-title\">Byron de Villiers</h4>\r\n                                    <h6 class=\"card-category\">Software Engineer</h6>\r\n                                </div>\r\n                            </a>\r\n                            <p class=\"card-description text-center\">\r\n                                I’m an enthusiastic Software Engineer who is always keen to learn and grow. I am an\r\n                                achiever by nature and strive to do my best in all that I do as a professional and\r\n                                otherwise. I have a passion for the tech space and I'm determined to deliver scaleable,\r\n                                robust, and reliable solutions.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <a href=\"https://www.linkedin.com/in/byron-de-villiers-300535188/\"\r\n                                class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\"\r\n                                        (blur)=\"focus=false\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"> <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\"\r\n                                        (blur)=\"focus1=false\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\"\r\n        style=\"background-image: url('./assets/img/profile-background.jpg');object-fit: cover;\">\r\n        <div class=\"filter\"></div>\r\n    </div>\r\n    <div class=\"section profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"owner\">\r\n                <div class=\"avatar\">\r\n                    <img src=\"./assets/img/profile.jpg\" alt=\"Circle Image\"\r\n                        class=\"img-circle img-no-padding img-responsive\">\r\n                </div>\r\n                <div class=\"name\">\r\n                    <h4 class=\"title\">Byron de Villiers<br /></h4>\r\n                    <h6 class=\"description\">Software Engineer</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                    <p>\r\n                        I’m an enthusiastic Software Engineer who is always keen to learn and grow. I am an achiever by\r\n                        nature and strive to do my best in all that I do as a professional and otherwise. I have a\r\n                        passion for the tech space and I'm determined to deliver scaleable, robust, and reliable\r\n                        solutions.\r\n                    </p>\r\n                    <br />\r\n                </div>\r\n            </div>\r\n            <br />\r\n\r\n\r\n\r\n            <div class=\"col-md-6 ml-auto mr-auto\">\r\n                <div class=\"mb-4\">\r\n                    <h4 style=\"font-weight: 500;\">\r\n                        Posts:\r\n                    </h4>\r\n                </div>\r\n                <ul class=\"list-unstyled\">\r\n                    <ng-container *ngFor=\"let article of articles\">\r\n                        <li>\r\n                            <div class=\"row d-flex\">\r\n                                <div class=\"m-3\">\r\n                                    <img style=\"height: 50px; width: 50px; object-fit: contain;\" [src]=\"article.imgOne\"\r\n                                        alt=\"...\">\r\n                                </div>\r\n                                <div style=\"max-width: 65%;\">\r\n                                    <h6 style=\"text-align: left;\">{{article.title}}<br />\r\n                                        <small>{{article.date}}</small>\r\n                                    </h6>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ml-auto\" style=\"text-align: right;\">\r\n                                <a href=\"#/read-article/?id={{article.id}}/slug={{toDashCase(article.title)}}\">\r\n                                    <button class=\"btn btn-outline-default btn-round\">Read</button>\r\n                                </a>\r\n                            </div>\r\n                        </li>\r\n                        <hr />\r\n                    </ng-container>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/read-article/read-article.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/read-article/read-article.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <div style=\"display: flex; position: relative;\">\n                            <img class=\"img-1\" [src]=\"article.imgOne\" alt=\"\">\n                            <ng-container>\n                                <h1 *ngIf=\"article.imgTwo\"> + </h1>\n                                <img *ngIf=\"article.imgTwo\" class=\"img-2\" [src]=\"article.imgTwo\" alt=\"\">\n                            </ng-container>\n                        </div>\n                    </div>\n                    <h1 class=\"presentation-title\">{{article.title}}</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">{{article.subtitle}}</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n    </div>\n\n    <div class=\"main\">\n        <div *ngIf=\"article.id==1\">\n            <app-article-one></app-article-one>\n        </div>\n        <div *ngIf=\"article.id==2\">\n            <app-article-two></app-article-two>\n        </div>\n    </div>\n\n\n\n    <div class=\"container\">\n        <hr />\n        <div class=\"grid\">\n            <div class=\"d-flex\">\n                <div>\n                    <img class=\"avatar\" src=\"assets/img/profile.jpg\">\n                </div>\n                <div class=\"mt-4 ml-4\">\n                    <h6 style=\"margin: 0px;\">WRITTEN BY:</h6>\n                    <h4 style=\"margin: 0px; font-weight: 400;\">Byron de Villiers</h4>\n                </div>\n            </div>\n            <div class=\"float-right mt-4\">\n                <a href=\"#/user-profile\">\n                    <button class=\"btn btn-outline-default btn-round\"> Read more</button>\n                </a>\n            </div>\n        </div>\n        <hr />\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-container {\n  z-index: 100;\n  position: fixed;\n  top: 60px;\n  width: 100%;\n  height: 2.2px;\n  background: #ccc;\n}\n\n/* The progress bar (scroll indicator) */\n\n.progress-bar {\n  height: 2.2px;\n  background: #33b1ff;\n  width: 0%;\n  transition: linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxibG9nXFxhbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQSx3Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMi4ycHg7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLyogVGhlIHByb2dyZXNzIGJhciAoc2Nyb2xsIGluZGljYXRvcikgKi9cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiAyLjJweDtcclxuICBiYWNrZ3JvdW5kOiAjMzNiMWZmO1xyXG4gIHdpZHRoOiAwJTtcclxuICB0cmFuc2l0aW9uOiBsaW5lYXI7XHJcbn1cclxuIiwiLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuMnB4O1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4vKiBUaGUgcHJvZ3Jlc3MgYmFyIChzY3JvbGwgaW5kaWNhdG9yKSAqL1xuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMi4ycHg7XG4gIGJhY2tncm91bmQ6ICMzM2IxZmY7XG4gIHdpZHRoOiAwJTtcbiAgdHJhbnNpdGlvbjogbGluZWFyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.showScroller = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function () {
            var winScroll = window.scrollY;
            var height = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            if (winScroll > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
                _this.showScroller = _this.isArticle() ? true : false;
                if (_this.showScroller) {
                    if (window.document.getElementById("myBar")) {
                        window.document.getElementById("myBar").style.width = scrolled + "%";
                    }
                }
            }
            else {
                navbar.classList.add('navbar-transparent');
                _this.showScroller = false;
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        var version;
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.isArticle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee.includes('read-article')) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_read_article_read_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/read-article/read-article.component */ "./src/app/pages/read-article/read-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'read-article', component: _pages_read_article_read_article_component__WEBPACK_IMPORTED_MODULE_6__["ReadArticleComponent"] },
    { path: 'user-profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/article-one/article-one.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/article-one/article-one.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\r\n    display: grid;\r\n    grid-template-columns: 60% 35%;\r\n    -moz-column-gap: 5%;\r\n         column-gap: 5%;\r\n}\r\n\r\n.grid-two {\r\n    display: grid;\r\n    grid-template-columns: 45% 50%;\r\n    -moz-column-gap: 5%;\r\n         column-gap: 5%;\r\n}\r\n\r\n@media(max-width:768px) {\r\n\r\n    .grid {\r\n        display: block;\r\n    }\r\n\r\n    .grid-two {\r\n        display: block;\r\n    }\r\n\r\n    img {\r\n        max-width: 320px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLW9uZS9hcnRpY2xlLW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBYztTQUFkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFjO1NBQWQsY0FBYztBQUNsQjs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtb25lL2FydGljbGUtb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgMzUlO1xyXG4gICAgY29sdW1uLWdhcDogNSU7XHJcbn1cclxuXHJcbi5ncmlkLXR3byB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NSUgNTAlO1xyXG4gICAgY29sdW1uLWdhcDogNSU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuXHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtdHdvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/article-one/article-one.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/article-one/article-one.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleOneComponent", function() { return ArticleOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ArticleOneComponent = /** @class */ (function () {
    function ArticleOneComponent() {
        this.code = "function myFunction() {\n  document.getElementById(\"demo1\").innerHTML = \"Hello there!\";\n  document.getElementById(\"demo2\").innerHTML = \"How are you?\";\n  }";
    }
    ArticleOneComponent.prototype.ngOnInit = function () {
    };
    ArticleOneComponent.prototype.onHighlight = function (e) {
        this.response = {
            language: e.language,
            relevance: e.relevance,
            second_best: '{...}',
            top: '{...}',
            value: '{...}'
        };
        console.log(this.response);
    };
    ArticleOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-one',
            template: __importDefault(__webpack_require__(/*! raw-loader!./article-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-one/article-one.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./article-one.component.css */ "./src/app/components/article-one/article-one.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleOneComponent);
    return ArticleOneComponent;
}());



/***/ }),

/***/ "./src/app/components/article-two/article-two.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/article-two/article-two.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media(max-width:768px) {\r\n\r\n    .grid {\r\n        display: block;\r\n    }\r\n\r\n    .grid-two {\r\n        display: block;\r\n    }\r\n\r\n    img {\r\n        max-width: 320px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXR3by9hcnRpY2xlLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS10d28vYXJ0aWNsZS10d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuXHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtdHdvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/article-two/article-two.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/article-two/article-two.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTwoComponent", function() { return ArticleTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ArticleTwoComponent = /** @class */ (function () {
    function ArticleTwoComponent() {
        this.codeSnippetOne = "public depthFirstSearch(inputNode:Category): Boolean {\n      let stack: Stack = new Array();\n      let explored: Set<any> = new Set();\n      let hasProduct: Boolean = false;\n      stack.push(inputNode);\n      explored.add(inputNode);\n      while (stack.size()) {\n        const topNode = stack.pop();\n        const topNode = stack.pop();\n        const topNodeProducts = this.products.filter(product => {\n          return product..parentId === topNode.id);\n        });\n        hasProduct = topNodeProducts.products.length ? true : false;\n\n        if (!hasProduct) {\n          const unexploredNodes = this.categories.filter(node => {\n            return (!explored.has(node) && node.parentId === topNode.id);\n          });\n          for (const unexploredNode of unexploredNodes) {\n            explored.add(unexploredNode);\n            stack.push(unexploredNode);\n            const unexploredNodeProducts = this.products.filter(product => {\n              return product.parentId === unexploredNode.id);\n            });\n            hasProduct = unexploredNodeProducts.products.length ? true : false;\n          }\n      }\n    }\n    return hasProduct;\n  }";
        this.codeSnippetTwo = "export class Stack {\n      public count: number;\n      public storage: Object;\n      constructor() {\n        this.count = 0;\n        this.storage = {};\n      }\n      push(value) {\n        this.storage[this.count] = value;\n        this.count++;\n      }\n      pop() {\n        if (this.count === 0) {\n          return undefined;\n        }\n        this.count--;\n        const result = this.storage[this.count];\n        delete this.storage[this.count];\n        return result;\n      }\n      size() {\n        return this.count;\n      }\n    }";
        this.codeSnippetThree = "public depthFirstSearch(category:Category): Boolean {\n      let stack: Stack = new Stack(); // Faster then array.\n      let explored: Set<any> = new Set();\n      let hasProduct: Boolean = false;\n      stack.push(inputNode);\n      explored.add(inputNode);\n      while (stack.size() && !hasProduct) { // Break if condition satisfied.\n        const topNode = stack.pop();\n        const topNodeProducts = this.products.filter(product => {\n          return product..parentId === topNode.id);\n        });\n        hasProduct = topNodeProducts.products.length ? true : false;\n        if (!hasProduct) {\n          const unexploredNodes = this.categories.filter(node => {\n            return (!explored.has(node) && node.parentId === topNode.id);\n          });\n          for (const unexploredNode of unexploredNodes) {\n            explored.add(unexploredNode);\n            stack.push(unexploredNode);\n            const unexploredNodeProducts = this.products.filter(product => {\n              return product.parentId === unexploredNode.id);\n            });\n            hasProduct = unexploredNodeProducts.products.length ? true : false;\n            if (hasProduct) { break; } // Break if condition satisfied.\n          }\n      }\n    }\n    return hasProduct;\n  }";
        this.codeSnippetFour = "checkCategoryProduct(category){\n    category.hasProduct = this.utilService.depthFirstSearch(\n      category,\n      'categories',\n      'searchCategoryProducts',\n      this\n    );\n    return category;\n  }\n  private searchCategoryProducts(category: any): Boolean {\n    const products = this.products.filter(x => x.categoryId === category.id);\n    return products.length ? true : false;\n  }\n";
        this.codeLast = "public depthFirstSearch(inputNode: any, flatTreeName: string, conditionFunctionName: string, that: any): Boolean {\n      let stack: Stack = new Stack();\n      let explored: Set<any> = new Set();\n      let conditionSatisfied: Boolean = false; // Generic condition\n      stack.push(inputNode);\n      explored.add(inputNode);\n\n      while (stack.size() && !conditionSatisfied) {\n        const topNode = stack.pop();\n\n        conditionSatisfied = that[conditionFunctionName](topNode); // Generic condition function\n        if (!conditionSatisfied) {\n\n          const unexploredNodes = that[flatTreeName].filter(node => { // Generic flat tree\n            return (!explored.has(node) && node.parentId === topNode.id);\n          });\n          for (const unexploredNode of unexploredNodes) {\n            explored.add(unexploredNode);\n            stack.push(unexploredNode);\n            conditionSatisfied = that[conditionFunctionName](unexploredNode); // Generic condition function\n            if (conditionSatisfied) { break; }\n          }\n        }\n      }\n      return conditionSatisfied;\n    }";
    }
    ArticleTwoComponent.prototype.ngOnInit = function () {
    };
    ArticleTwoComponent.prototype.onHighlight = function (e) {
        this.response = {
            language: e.language,
            relevance: e.relevance,
            second_best: '{...}',
            top: '{...}',
            value: '{...}'
        };
        console.log(this.response);
    };
    ArticleTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-two',
            template: __importDefault(__webpack_require__(/*! raw-loader!./article-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-two/article-two.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./article-two.component.css */ "./src/app/components/article-two/article-two.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleTwoComponent);
    return ArticleTwoComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm5/ngx-highlightjs.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _article_one_article_one_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-one/article-one.component */ "./src/app/components/article-one/article-one.component.ts");
/* harmony import */ var _article_two_article_two_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-two/article-two.component */ "./src/app/components/article-two/article-two.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"]
            ],
            declarations: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _article_one_article_one_component__WEBPACK_IMPORTED_MODULE_11__["ArticleOneComponent"],
                _article_two_article_two_component__WEBPACK_IMPORTED_MODULE_12__["ArticleTwoComponent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]],
            providers: [
                {
                    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_OPTIONS"],
                    useValue: {
                        lineNumbers: true
                    }
                }
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _article_one_article_one_component__WEBPACK_IMPORTED_MODULE_11__["ArticleOneComponent"],
                _article_two_article_two_component__WEBPACK_IMPORTED_MODULE_12__["ArticleTwoComponent"],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/article/article.service */ "./src/app/services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, route, articleService) {
        this.location = location;
        this.element = element;
        this.route = route;
        this.articleService = articleService;
        this.appstraxLogo = false;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.onScrollEvent = function ($event) {
        this.appstraxLogo = ($event.currentTarget.scrollY > 155) ? true : false;
    };
    ;
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.route.queryParams.subscribe(function (params) {
            _this.article = _this.articleService.getMetaDataById(parseInt(params.id));
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/landing') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isArticle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee.includes('read-article')) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_article_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onScrollEvent", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_article_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/article/article.service */ "./src/app/services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(articleService) {
        this.articleService = articleService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.getMeatData();
    };
    LandingComponent.prototype.toDashCase = function (text) {
        return text.replace(/(\ \w)/g, function (m) { return '-' + m[1]; });
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/landing/landing.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _read_article_read_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read-article/read-article.component */ "./src/app/pages/read-article/read-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _read_article_read_article_component__WEBPACK_IMPORTED_MODULE_7__["ReadArticleComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/article/article.service */ "./src/app/services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(articleService) {
        this.articleService = articleService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.getMeatData();
    };
    ProfileComponent.prototype.toDashCase = function (text) {
        return text.replace(/(\ \w)/g, function (m) { return '-' + m[1]; });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/read-article/read-article.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/read-article/read-article.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\r\n    display: grid;\r\n    grid-template-columns: 90% 10%;\r\n}\r\n\r\n.avatar {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.read-more {\r\n    color: #343a40 !important;\r\n}\r\n\r\n@media(max-width:768px) {\r\n    .grid {\r\n        display: block;\r\n        margin-bottom: 75px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVhZC1hcnRpY2xlL3JlYWQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWQtYXJ0aWNsZS9yZWFkLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ucmVhZC1tb3JlIHtcclxuICAgIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/read-article/read-article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/read-article/read-article.component.ts ***!
  \**************************************************************/
/*! exports provided: ReadArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadArticleComponent", function() { return ReadArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/article/article.service */ "./src/app/services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ReadArticleComponent = /** @class */ (function () {
    function ReadArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ReadArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.article = _this.articleService.getMetaDataById(parseInt(params.id));
        });
    };
    ReadArticleComponent.ctorParameters = function () { return [
        { type: _services_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ReadArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-read-article',
            template: __importDefault(__webpack_require__(/*! raw-loader!./read-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/read-article/read-article.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./read-article.component.css */ "./src/app/pages/read-article/read-article.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReadArticleComponent);
    return ReadArticleComponent;
}());



/***/ }),

/***/ "./src/app/services/article/article.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/article/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ArticleService = /** @class */ (function () {
    function ArticleService() {
        this.articleMeta = [
            {
                id: 1,
                title: 'Migrating From Ionic 3 to Ionic 5',
                subtitle: 'Some useful tips from my experience',
                imgOne: 'assets/img/ionic-logo.jpg',
                imgTwo: 'assets/img/angular2-logo.png',
                date: '23 Aril 2020'
            },
            {
                id: 2,
                title: 'Super Generic and Fast Depth-First Search Implementation',
                subtitle: 'A deeper look at depth first search in Type Script/Angular',
                imgOne: 'assets/img/js.png',
                date: '23 Aril 2020'
            }
        ];
    }
    ArticleService.prototype.getMeatData = function () {
        return this.articleMeta;
    };
    ArticleService.prototype.getMetaDataById = function (id) {
        return this.articleMeta.find(function (x) { return x.id === id; });
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\blog\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map