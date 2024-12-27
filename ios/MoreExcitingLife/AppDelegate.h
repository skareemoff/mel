#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <Expo/Expo.h>
#import <Firebase.h>

@interface AppDelegate : EXAppDelegateWrapper

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [FIRApp configure];
  return YES;
}
