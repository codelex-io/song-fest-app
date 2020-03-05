package com.songfestapp;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected Bundle getLaunchOptions() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("isRealDevice", true);
        return bundle;
      }
    };
  }

  @Override
  protected String getMainComponentName() {
    return "SongFestApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
