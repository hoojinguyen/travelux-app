package com.myappseftconfig;

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

import android.os.Bundle;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MyAppSeftConfig";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // super.onCreate(null);
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); 
  }
}
