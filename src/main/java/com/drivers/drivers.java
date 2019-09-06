package com.drivers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class drivers {
	public static WebDriver getDriver (String browser)
	{
		if(browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.29\\eclipse-wokspace\\Nishith\\chromedriver_win32.exe");
		return new ChromeDriver();
	}
	return null;
}
}