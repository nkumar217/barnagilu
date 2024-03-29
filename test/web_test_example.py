import unittest
import os
import time
from selenium import webdriver


class BarnagiluTestCase(unittest.TestCase):
    def setUp(self):
        pass
        
    def testChromePageTitle(self):
        chrome_path = os.path.join(os.getcwd(), "chromedriver.exe")
        self.browser = webdriver.Chrome(chrome_path)
        # Optional argument, if not specified will search path. 
        self.browser.get('http://www.barnagilu.com')
        time.sleep(5)
        self.browser.save_screenshot("chrome1.png")
        self.assertEqual('BARNAGILU', self.browser.title)
        #self.assertEqual("https://www.barnagilu.com", self.browser.current_url)
        self.assertIn("barnagilu.com", self.browser.current_url)
        self.browser.save_screenshot("chrome2.png")

        self.browser.quit()
        self.browser = None



    def testEdgePageTitle(self):

        edge_path = os.path.join(os.getcwd(), "msedgedriver.exe")
        self.browser = webdriver.Edge(edge_path)
        self.browser.get('http://www.barnagilu.com')
        time.sleep(5)
        self.browser.save_screenshot("edge1.png")
        self.assertEqual('BARNAGILU', self.browser.title)
        #self.assertEqual("https://www.barnagilu.com", self.browser.current_url)
        self.assertIn("barnagilu.com", self.browser.current_url)
        self.browser.save_screenshot("edge2.png")

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
    
    