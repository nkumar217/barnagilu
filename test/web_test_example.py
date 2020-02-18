import unittest
import os
import time
from selenium import webdriver


class BarnagiluTestCase(unittest.TestCase):
    def setUp(self):
        pass
        
    def testChromePageTitle(self):
        self.browser = webdriver.Chrome('C:\\Users\\jdeep\\Desktop\\test\\chromedriver.exe')  
        # Optional argument, if not specified will search path. 
        self.browser.get('http://www.barnagilu.com')
        time.sleep(5)
        self.assertEqual('BARNAGILU', self.browser.title)
        #self.assertEqual("https://www.barnagilu.com", self.browser.current_url)
        self.assertIn("barnagilu.com", self.browser.current_url)
        self.browser.quit()
        self.browser = None

    def testEdgePageTitle(self):
        self.browser = webdriver.Edge("E:\\INTERVIEW_PREPARATION_DONT_DELETE\\barnagilu\\test\\msedgedriver.exe")     
        self.browser.get('http://www.barnagilu.com')
        time.sleep(5)
        self.assertEqual('BARNAGILU1', self.browser.title)
        #self.assertEqual("https://www.barnagilu.com", self.browser.current_url)
        self.assertIn("barnagilu.com", self.browser.current_url)
        self.browser.quit()

    # def testIETitle(self):
        # self.browser = webdriver.Ie("E:\\INTERVIEW_PREPARATION_DONT_DELETE\\barnagilu\\test\\IEDriverServer.exe")    
        # self.browser.get('http://www.barnagilu.com')
        # self.assertEqual('BARNAGILU', self.browser.title)
        # time.sleep(5)
        # #self.assertEqual("https://www.barnagilu.com", self.browser.current_url)
        # self.assertIn("barnagilu.com", self.browser.current_url)
        # #self.browser.quit()
        
    
if __name__ == '__main__':
    unittest.main(verbosity=4)
    
    