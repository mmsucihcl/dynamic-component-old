# AngularDynamicComponent

This project created to load the component dynamically at run time instead of staticaly 

Project Description
===================

Dynamic Component are one of the core concepts introduced in angular, this will greatly help the developers to render a component dynamically during runtime.

The component templates are not always fixed sometimes we may need to load the new component at run-time in various scenarios.

So, in this article, let’s have a deep look into the process of creating dynamic component with simple steps,

The following example show how to build a dynamic news feed. 

Let’s assume we have one application to display the different news feed dynamically and news feeds will be loaded with frequent updates.

It cannot be simply achieved with static component So here’s where the dynamic component comes in to make it possible.

The good news is that Angular has its very own API for loading components dynamically so let’s see how to create this dynamic component now,

Steps Required to Create Dynamic Component in Angular,
1.Create an anchor directive
2.Loading components
3.Resolving components 

Create An Anchor Directive
=========================
To define the anchor point, We should let the angular know where to include this anchor point into components. Here we’re going to create helper directive called the anchor to insert anywhere into the component. This directive will handle the insertion of Newsfeed.
NewsFeedDirective injects ViewContainerRef for gaining the access to view the container of the element that will host the dynamically added component.

In the @Directive decorator, you can notice the selector name mentioned as “news-feed” which is used to apply the directive to the element.
Most of the implementation of newsfeed will goes into newsfeed.component.ts.
In this solution I have used the <ng-template> where all the elements will be directly added on the newsfeed directive which we created earlier.
To add NewsFeedDirective just add the selector “news-feed” to the <ng-template>. 

Resolving the components
========================
In the methods in news-feed.component.ts, NewsFeedComponent takes an NewsFeedItem objects as input served by NewsFeedService.NewsItem is an array of objects, it will specify what type of the component to load and what data we should bind in the component.
With use of getAds() method in NewsFeedService, NewsFeedComponent taking an array of components to load the dynamic list of newsfeed without any static templates.
NwsFeedComponent will loop through the array of NewsFeedItem and it loads a fresh template for every 3 seconds by calling loadNewsFeedCompany().
The loadNewsFeedComponents() will perform more things to get it done so will go through step by step now,

1.It will get the news feeds as a “NewsFeedItem object array” from NewsFeedsService.

2.Next, it will select the news feed and it will resolve a ComponentFactory for specific component using ComponentFactoryResolver. Then the ComponentFactory will start creating instance for each components.

3.NewsFeedDirective will inject the ViewContainerRef into constructor and this will help us to access the element that we want to use as a dynamic component.

4.Here we are using createComponent() to add component into template. This method returns a reference of the loaded component and using that reference we have interacted with the component for accessing its properties and methods.

Angular compiler will generate a ComponentFactory for any component but it won’t create any selector references for any dynamically loaded components until those components are loaded at runtime.
We can also tell angular compiler to generate the component factory for dynamic components by adding in “entryComponents” which is added into NgModule

The NewsFeedComponent Interface
===============================
All the NewsFeedComponent will implement a common NewsFeedComponent interface to standardize the API for passing data to the components.

Note:-
As I mentioned earlier, the news feed will change for every 3 second.






