package com.bibleapp;

import com.facebook.react.ReactActivity;

/* for react native navigation
 use splash activity
 other wise use ReactActivity
*/
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "bibleApp";
    }

    private static  String test(){
        return "etryy";
    }

}
