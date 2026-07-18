package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ActivityTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/dashboard");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 Verify Dashboard Opens
    @Test
    public void verifyDashboardPage() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("dashboard"));

        Thread.sleep(3000);

        driver.quit();
    }

    // TC002 Verify Recent Activity Section
    @Test
    public void verifyRecentActivitySection() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement activity =
                driver.findElement(By.xpath("//*[contains(text(),'Recent Activity')]"));

        assertTrue(activity.isDisplayed());

        Thread.sleep(3000);

        driver.quit();
    }

    // TC003 Verify Activity List Display
    @Test
    public void verifyActivityList() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement activityList =
                driver.findElement(By.tagName("ul"));

        assertTrue(activityList.isDisplayed());

        Thread.sleep(3000);

        driver.quit();
    }

    // TC004 Verify Dashboard Heading
    @Test
    public void verifyDashboardHeading() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement heading =
                driver.findElement(By.tagName("h1"));

        assertTrue(heading.isDisplayed());

        Thread.sleep(3000);

        driver.quit();
    }

    // TC005 Verify Page Title
    @Test
    public void verifyPageTitle() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        System.out.println(driver.getTitle());

        assertTrue(driver.getTitle().length() > 0);

        Thread.sleep(3000);

        driver.quit();
    }

}
