import './App.css'
import { Carousel, type ObjProps } from './Carousel';

// CAROUSEL PROPERTIE'S
export const images: ObjProps[] = [
  {
    src: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51lEw7zIELL._AC_UF894,1000_QL80_.jpg',
    alt: 'Megumi Fushiguro',
  },
  {
    src: 'https://i.ebayimg.com/images/g/bowAAOSwDxBfA~d6/s-l1200.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61HhFjHsNQL._AC_UF894,1000_QL80_.jpg',
    alt: 'Yuji Itadori',
  },
  {
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMVExcVFRUXGBcZGxocGxkYGhofGhoZGRgYGRoaHBgfHysjGhwoIBkaJDUkKC0uMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMpIyk8MzQxMS4yMTEzMTEzMTExMTExMzExMTExMTMxMTExMTExMTExMTExMTExMTExMTExMf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABNEAACAQIEAwUEBQcICQMFAAABAhEAAwQSITEFQVEGEyJhcTKBkaEHQlKx8BQjYnKSwdEkM3OCk7LS4RUXNENTVKLC8YOj4xYlNUTT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAC0RAAICAQQCAQMCBwEBAAAAAAABAhEDEiExQQRRYRMicYGRFDIzobHB8AVC/9oADAMBAAIRAxEAPwDYKp/b7tCcEiOttLhuOy+IwBlE8hrNXCs1+mcfye1rH55x/wBLmPlQT6CiDB9JtznhbX7ZH/aacT6UDzwaH0vf/FVZ7P4gLbym5ZALXJFwmJZLaqCmdcytLjMQcoV9fFBmcXNi+F7zE2gQ2hUHND92Dp3hEATvBGQDY0D03VBqLq7DbfSceWDX33v/AIq5H0nN/wAmn9qf/wCdVccHsmO7xVtmOTKBAl2IBEZswAneNp00NNf6HB2xWG/tD7vq+tbUDKkXLDfSJfuZsmDRsok/nDoBznLXVzt7iiVVcFbDOuZQWZpHXQDSqxwa2bF+8qg3QqDVAI8WVlkFhvI0BPlNFXvsLguG1d0tlXICgKMzZyCW1hkjSeflMuSc4zaUbXRZiwY5wTlKn2iavb3GyynCWyyiSAtzQdSJOleW+3uNJAGEtmRmAC3ZK/aHi286FmVv95btXRHgcMsAqFJZpZpLDwmOgr3iXEXKm2lt1uXCyW5ABKrAc7+EjxfCaH6mS0lHn+wX8PhSbcuP7ho9vcUAD+RCDEHxiS2gjQzMiPWo7fSFi/F/JbYy+1Iu+ERPi1099QsXeJS3CXNDaYwk+FWzGWBgCEaJ3y0y2XPfBt34uABoQEgqpzARtCsh16mujlnW8f8ArCl4uK9pf9QWs/SHiWBYYRGUblTcgRqZMGK4vfSTiFMHDW1JAIzF9jqDy0ihOE8Fl7eXEEHOqqbZBnPk9sD7RAIPMxVVuXy0EsToBJPICB7op+NucnapImzY4Y4qnbZfP9ZmI/4Nr4v/AIqR+kzE/wDBtf8AubftVQiQOc/d868L0/REntmgf6zb/wDwLf7T0n+ky/Olm0R0zPI2mdaoCSdqIYLhhaC2g5+mnP40DjBcmq3wW7/WXiSfDYtf+4fuNSsP27xrie4sgfpG5/ioDhcOtsQo9fPSKfVelIlkXSHRx+yx2+2OJJEpZ9wuffn/AHV5d7W4kEgC3AMey3L+tQK1aOYDz+6vbqSWPmY++k625UPWKKhddlu7NdoL969kcJlysxyhgdI6setXas87F2st1uvdt966VodV4HaZJmjTFSpUqoEirO/pbsh7NhSYBxDiZj6l07wY26GtEqj/AEh2yy2f0b1xtpnwXFjcR7e/lS8jpJjMat0ZThcCCXUMrEg5NvFowBE6DWNZ+rTyYL8yp7sls4DdQvtTI28MCjI4Q3fi7mXY6FTpqTI5A611b4QwF7VIulNPEPAAysCY0JDcqV9RPso+k/QJs4G2t0gglSFCsDEkqSY8WkxHqdxUM4O2DahmeWC3AB7MAMwmNIE7nQA9DFhfg+V7ZtqAttgQCzzBeX33MTEnemLnCr3cugylmaRJEe0CN+kke6iU17BeN+iFgbMYgJbLopUN4ZK5l8Q8ZGqhgDO0yKcv4m+uHZ+8uZkuEDOJ0zCNCNdic0axE8qn3cNNh7emYqgPjTU96zPrOkgj/OpNq0QwJIgKo1YcoGgBA2126ULmgljBWJN5rqWzdJV1LECJ9hrckw31QEmTqW0E01cW6biP33iDuEYhJmTmnTWMw3B30jaid/CvdtAZAjO/iVQJZfEAoCnUkRpr76MJ2XRfFiLjKpgpatAtcAExrtbJATU6eCJ1NdrRko0UzE43Erbzd9IMoRC6gd4sEx4tCxg6+IHlpFxXGcRcBD3CQdxCgaoUOgEeyxX0NaAOE4QqMthSEYGHu3bmoiS9sMgzHcrBnzmpHDlw+sYbDL6WbW0aicuoD5wD5Vv1IroDRN8Gc2+PYlTIumZJmF1LMHJOmuoG/LTbShvlWvM9rVO6sEDde6tRB8stV/jHAMNcIIQ2mJIHdRlOhOtptFAjdW10AGtYssfRrxTfLKDNO4a2XYAczE1K4twe5akznQbsARGseJTquoInbTep3Z/D+BWO0kj19n91E8i02gPpSUqY/wAOwAVRPUn3agffNE7KcuX/AI/jXAqbat/j3j+FSTm3uyqEEuCKU286lYe2T8I+4161jaKkINopU5/bsOhD7kmJkGoHPc9fKlbTkK9Y60qGGyGT3YZ7KD85c/om+9av1UDsrcPeleqN+78e6r/V/jcM83yf5hUqVKqicVZx9MbuLFoW2KsbzSQ2XTK+5HKSPhWj1l306Me6sLyNy6feAI/vGlz5QUTNn4leB8N66R1Ltr7p0r1eM4gf71/jP31ApV2hegtcvYTXjuK5XW+Cn91Ojj2LXU3T5StvrG2WetCUYjYkelc1miPo36kvYYHaXFc7gPqifuFSMBxvFXHW1bVGdzlVQgkknbcCgArQvoh4cB3uMdA3dxbtSY8bAZyND4oZFESSbhFZKMUro5ZJ+y0Ya1bwaZRlbEso7y4oUZcwnKgOw5gak6EzIpg2gxzsJY82Vc3rIEg1zjjbtnvb9y2hME5YlmgTLmRv9VQ2g3ob/wDVWFZiBc/ahR8TA+6p2m+B8aXIYW1r/HUj+tv8aj3sJBaJBIM+ciJ9dvLU9adw+LtXFKloEZg3NTurfqkjoQYO9N4vHWbaZnuIYEByyiJbYtoNY2GpjbSh3GWD+O31t3sPdiFuqbbR9olSk9QGF0eWancWhzK22UGJiMxI1I6Llze6hXGXTFYdLVu7bzWnzh0fNlBLABhAYAZtGjeBzFEbuKIUlogeIk6ABdSSdgB/lvArXtXs6Kbv0Bu1eLNpEZHIuDRVlTFsjxd4h1bMcupGmg0kzG4ffV0V1ACkwVH+7ciSp/ROpU+cb7huL4nDXLr3M11ix+qqquwGhOp25qD6711wm7YV/DcZVaFdLogMp3i4p8LDcEhQCPaFHLH9trkCGW5aZcf4LNYSTU+ouCbUoTLLziCymQCRybwkEQIKnQCKlipZFUY0eU4BAn4VxXR299JmrpDoOrZzXopCkKMWF+yh/lA/Vb7q0Gs97Kf7QP1W+6tCq7xeGef5X84qVKlVZMKsy+m1MwwySBLXjP6qIf3mtNrPPpausj4U2yA83QCQDAY2V2O+rClz6DhuzLLfCmKXXBBFrmCIPM/Ll1pq/wAPZWRSRLEjlAiJOhOmvONqt0Mt3DrdILsL2YqMuY+CNBuYHOouJw7fk6i5lhAgGXfwouZT1k5fUHWlrI2x7xKgEOENnZSdkkaruwOSTtEjWOVN4bhTP3eVllwTrm0AI6AknUaAVbb2FYMveBXYOFXKIyoyvIO3QSR+j6VCvXLguXAmijvCIAGVhbssNdtyx1139K76lnPGlyADwtgcuZZy5tNRPiJEjaAhn3VpnZzELZwNm2inMq5mBUkteuqWK5TGYgXMoB3OU8hmpPB5uhA+ZiwCFyj3Mua7cJYgeILlBUkcmHSr/goRrRaDD5m6T3gYkTyWC3otZKT4ZihHlGZ9sLl84i4l5wXQgFVJKI0AlQfrMJgt1BA0AADgUT7UKPyvEQSQ1642oIPjcvBB1BGaD5g0U7KcKkC4RqZieSxvHX/Lroc5xhDUzMeOWWelEPsziXR8hkKIcAj2YZS5AOwKZgesKfqirP2Y4Z+VXWuX27y3ZtgwPCGclwUgEwPCCTOYgKJgkGD2ndVVbaDNduAW1UQWys0SPX2QOeYn6orQuyXBxhcKtoxnOtwj61xtW15gABQeiilKeqOqqsZOGiTjd0ZhjXAxNw2lS2bZWAo8PdvayshUnxL3mUCTp3kbAR52nv3Vw9u2+QFnJbIxM5BALSBlJYsY8l6V52nwrYfGMHlVuDcjSGJTMJ3CsocfqilxHD96FBZUZwMuYgAXUzA2idhmlgDtmtxoKOPTYEu6K3atljCgk9BvRvD9mbjBTmAmNhMEnXWYgDnzgxOhMDAMbV8d4pBUwysIZZ09x1n/ACNaPYMqPT51N5nkTwpaVyV+D42PNeroCcFwptJF3dPArAkHJmlDG22YQZgW15UStmZEiVMH1392hBjzrniDqyPEEAAkjoA5nzGunXWNqWE9piRutsx6r+B7qQ5SklN8tbop0RitK4T2fwSAoG9K4a9PU/CvDSYxtpsKcqTSOaUV1FehetNEhDsyYxFv+sP+hq0Ss67PsBiLenPz6GtFq7xeGQeV/MhUqVKqyUVZf9MuONu9h8q22OS77a5ol7Wo6ez8q1Csf+nAk4q10Fn77j/wFBNXQUW1uiq3O0d0xmt2WjYlCY9PFpsPhXg7RXSdbdnUyfzZ1MASfF5D4ComDxVsDJdtqy/aAi4P60iR5SP3U9f4R4c9u4ptkSCxM+0FjRepA1CneQIoNMV0N1za2ZJbtPf3yWvXK28RPt7xTDccYmTasyZmFYSCACD49QQqiD0FDmQoQGGmhgHRlOujCQQeompNzFWSZGHX33Lp+4itcY+jNcnyyxdiMeHvmVt2lS1cZjbUDMAyAAlmgAF88zsrdatIc5shkCXKTEgLcOkgawChnnJ6VUuzlu13q5FBLIxy288ORcthEl2ky5G2hKgHnWopwXD27aG4q94AQbiZg7M5zEAr4mE7AzoKRkoZGWndmf8AG8JhWYtdtnMYBe2WDaAASoBQmI5DYCgl3iK2LeXDhwrE63XzR5qgVR8cw8tavfEeCWHzFy4+1lKD3xllZP2oOtRsL2fwi7WQR1uS3/S59NhFZrjVS3DSldx2A30a8OVmfHXiWKvktyZLXSozMZ5gMoEnmegqzL2sW5dNuzkYqJbcqokb3JAnyHnqYpm/we3lIQpbUkkqBAkqEMRGWR7ufqEHCzYUrba2ASToSZMRvmYgadKyUlJ7MKMKW432jx+Hu4griIL5Ag/NwoXMXBS4xJmSRmETqNRQXFcNhCHYm0CSW1zBjorgbeL2WDQMyzKhgwn4vhD3CDeuW4Hs6MGjpLQomB1qbiXt2rZLFmUgyNCCI2JA1HoKJWqpmVF3apFTdr4QEMt20uxK27mQdCGBeyPLQU5huM3YW34ETSMtsNz5I5Kj3AUJvhcxyg5Z0kyY9YE0lUkgDc6D1NUaU+SZSaexod3EZMOYm40NoJYs2plokqOpJ0nrTmDgi2wfOHUktEZtVjT6oGYgDkNOVNcEw3d20CzoIZSTE7gjwiDLa+/mKdw9sKzhRADaAbDMM+g5aufhXkSnqm0n7PcUdGNX8Eh96Ve5j5fCvXGtdF1SYqSTuSPK9jT8eVJY6TXpafTy938KYAS+CmL9v9cfM1o9Zrw0/nbf66f3hWlVZ4vDIfL5QqVKlVZIKsd+m1/5ZajcWR87t3+FbFWMfTQ849R0soPi90/voXyjUUZzJmrZwXDDuwM6rkCSpnMc4S5IMiAWJAEGcsVUzVwwCKqf2I15lAttvgCD5R50E+BuLkEqFxK905AxCSFefDdAmQT9rnPPU8zQW9aZWKsCrDcEQR7q9UlWBBhlMgjkQdCPeKk8TxIusGEzlGaftZmJjXUagAnXTXrWpNGSaa+Sw/RVhM+OtNIlFvNB2JVEVfncn+pWwYm2SGVdWIILHlI9kchy02G5nniXZTEd1csXQwUribQLEwBbuArck9MqmfStzxO3tZF+s2x9B0J6/DXUJycnIr+JsuAUUoMmhhWYKSJ0YxmaOomDuKhXEVPaZmY8hO/kBLRrzJA8qMG6pERlXXIANSeZjl1JOs75TpUS8gjz+Z9/IenxqaTp7lWPdEIFuaxz3Hzg7/LzNNMUKksgA3OZY3/Wj5x8xXt/EASFOqwTtpO2afZB6noaA43jtlWg3QTy7uWPmMyz8Qw8gKOMWzmxNgWMlBprqhvBQP6rkCoWLwd4rqqvbEaPkbUc5eZ++nv9ILc9nB37hGssoj1zuGblzNP28UTvh7q/+pZ0/wCtGPpNOTYFFJ4lcXMVNlUIkaAg8oMDKJ/jtUBBqNY132jznlVz4ngFJZ1/Jmk+JbpNtx1UXBcIze8RQPHYSyoDpmUqRntuVaBI1tuulxdQOuonemalQvQ7Lrg7ZABzZpAk7Zup3MGddzuR5126+InrHykUzgXgxyO3r60+WksOhA/6Q3/dXixjJZnfo97I08SPBpXQ1pRXSinSrkljbddHEV7Sr2KIAfwBi7bP6a/3hWlGszw3tr+sPvFaYat8Tsg8vlCpUqVVkoqxX6Y//wAgf6K3971tVYt9LAU8RfMSB3dvUAE+z0LD76FmoqGHw+aSxyoPabpPIDmx1gfuBNF8PiDcZrZYqzi6yrGma6qvbQmZOX2gYBzBYmurHDEuWz42i1bFzKAAXLh2JiTBhVXn7NTOxN4nMJ1LSfa1kbzqJ36UqUk036KIRaaXsFca4bCLeX2W0uLBBt3OYKnVQTy5HTYihVteZ2HzPT8fvFaFxO2hfI2121cDDTXJlKtPIiTr5jpVXThgOqWrrjbNAKn0K3RNdjyWtzp46exGcL+TgRALqfXKLyn4zW5XcTbuWrd4a22VWTSWIdZAC82g7bbzImskt8LJtKrWmMZmj2QDMAGbkjnsW3O21W/hvaUWMFaU2M15GTDohZcpDqzW27wEwMqweZI94yW/AEotBfHu+rMUtWxq1xoEREgsTLRtplG/swpai9pu10/msKWCfWusSHfyXYqPMQekbkxjOHXMV4sW+Y/VS2Stq3v7K/WOvtGgmJ7O2cM5u3XL2lEi3HjZpACnkV11OnIRrS46XLcbUoxHuEcDOJtrcvXS1sklbaAqgIJBMQJO/iiTvJ3o3guF2La/mFtzOpPinqM+vw191UrifaK/dYbJaG1oAFI28Qjx+hEabVbMJ2lssoW2l66wABFtC0adSR8TWzjLk2Eo8Ei/hLh9lltnyRT8ygNQsuMT7L9PEIj3qkfOpicQdtPye6J+1cE/AMaC9oeNNaMLlmIK94+YHX2lU+n1gaGO7qg39qsZ4mjudbBDQdWtZwDEAhjuB0BjbwNVXuHK0fVDZsoJy+4NrMaeLXrU29xfEXNWuEKNIzFU15HKQTz3JNFOz3DQzE3VVlK6FyC7DaQJML0Oh29zZSWODlIVCLyzUYhfhTA21I5AR5rOUe/bTfapSMCAwBGYAmd9h+6Kisig90mit4wAdILRcAA2AMH1c1MrzIpNua7/AMHrZZOlB9Hq15Sr2irsTe1HoauLzgfP5V0xjU1CxF2SInSd/Osik3sbKTUXqOGumZmtgNY5WxmvR8dcnmeR0KlSpVSTirHfpLS02PugkBgLf1sp/mkI9rwH0zL61sVYr26UHimKBXMfAQIkkrZtEBQZBOnQ+h1BCYcOQfgne0Iyd4cpULBBe3M5Su8gsxDJnEEg8iOeB44WphkVDBiUz+YYlc2npyrvDouqeNTI5oC58rbKueB1X5gV5fti97SHeM+WLh0MFigaVMc0EaRNLpb2PtqqFxXjoJdk9srkVlLBbaTLQSAWc9YgaQTBkP8A6QvQB3jADpp92586cfAiDDgEfVcqGM8gFZtfWKYBQAjKT55o18hBEfjSijGKWwucpN7nX5ZdiO8f9puW3OjPZPhxxLtnuMMsMJzEEjMAdGBlSwI15tTXBOzuIukMF7tPt3BAjyU6v8I86t2G/JsGjJbEsYLEGST1kzCidBtvvDEDOdKo8hY4Nu5cEfFYrF4c+NUuW5gNOQ6xHiPhEzAB18zuXsJxqxeBVmyzKlLkQeoBkq/oDUG3xZ1diSCryWUjQEkyCOYj7/WofF+FWypuYc92T7dqfC3PwjaP0Tp0jYppN77fI5ya43JHEezlosSEdQRvaIifNGBIH6vwqF+TXLYCri7ttRyzFVHkA7p8hULhnEVkI4CaQGDPa8Xm1uAo9VPmedG+8xSkhWbLyzm3c93soSduZ3H2hLGpLZi04vdI4S2WH+1XnO8mHWB5FSI98UE4jwu6WAtoXXkwW2Afcmw8zUrF2sTcbxlEAOjNCIZEzmSRtJ3Om1eWrd1SB3quDqTbZoj9cjL7oJ323rlceGc6lyjjD4BbcZyheNjBVeWg+sZETBJOgBMkFMBlCHLLEsjM5Ms+Rsw/q+HTl67mFaw1vxF2X9KNWy6aEsc8cszlBrsRFNniyQLaI24A8UliSImACZ6gjYAEgmU5Ln9q3K8OmD1S29ew9w5DlBI2zAealic3kDofQD0qVXOHthVVRsoAHuEV6W1jyn7qn/A1u92J2gE03cvwByk/EA0xeuyY5T8przF7g8iBHkKxxtpMFSqLaOblyfh/D+FcV5FdU5IQ3Z5WxmsdrYjVPj9k2foVKlSqknFWWdruHYZsdde6rEErmgkbW1E6GtTrF+2XFnXG4hAAYuEA89ANPMfiaXkUmvtGY3FPcIWrHDVGXKwHRmvEDbWCxAM8/I03c4JgLupu3RGnic+HyJdTHxoZg+Iq405Rpz+HwHqPMV7jcXkAddVGjKI2+0PPUeoNT/enRT9rVhnDdmsCBqrv5u7gj9jKBz+BpwNg7Ed3ath12MAuDH2zLD1nrvBFCrRtuAwgg/j4173C9KFz92ao+qJWM47dcwvgHIj2iPM9d9vjpNDApB+R/d+PKKk9yPx9/r/AU2b0tkjkffzHxE1yfo5r2M3EJ2iR56EciCfx8DTmGYgQYj1Gnz2+46dK7GXrHMeW38fvrnudZWP3enp+OVa5JqmZTRC43w6QbiAE7ka6xvHn19PiuCcVKgI3itxEndB0bTVdTBjnERK0TQQKrnHcOq3JWIYTHQzrR45avtYE46fuRcg4Os+c+W8kz75nlM6Z1C8aRbQLHYmBaOttjz8GmWOcQNRIB0Yf2e4lkYW3PgJ0J+oxO88lnfaN9CJqJxjFm5cJ+qPCnQKOn3+UxoAACWPcF5Nvkm4fFW2KF4yMYbPbzW7Ow8KB1U7zMTHXUUS/0MA4uMdRcAeTJBz+HKQFEEwII2IiBQng1oEMDAlH3I1BXQ5NzoSZA5VP4bxIG2bTataWUPNwmVssHmCsjXbT6ooMkWt4/wDIbimpbT/T8ljZuZqA9w5ifd866/LFuJmQyD8RtoehpmplGuR8pXwJVJOlOXdgJBPlyHSvXhZAmdj086arF9zvo5/aq7FSpUqYAKK2I1ifE8V3a+ZmPcJP8PfW2GqsC2bJc73SFSpUqeIFWDdux/L8T/StW81hfbOzm4hfEgFrpAHPUgAnoJisZqK+CQdDFFMLihcXKx8UR6zOv4+e1C6StBkcqFqwk6HsJiGtPptOo8xp8asNrE5gCDoRp+PxvPrWr7hmJAidY8+fzon2bxKB8l32TOXybkNNeseZ86Xkj9uqhmJ/dpsIriGmeYnlv106iJ9xG5obcxOVxqRrEnpplI8gQT76I4pFuXLYt+AHIDA57E+ZBiidrs9hxurMf0mP3CKmn5EMSWpO30VQ8eeRvS1S7Bd8EwQNTy/S1BHnzrhs67hgw1ggg/A+/wCdGsFisO1zu7UEpuQI2GXQn2uk+lc8S4cXZrmbUDwj0HX1pcfLSmoyVL55HPxG4OUXb+AL+VHroefL8f50M4i0jU6jSPnI9fvB61b+F4UJaDqgZ211035A/VHP1oD2wRO98MTlBMdZIPv0GlOxeRGeRxiv1/AjN40oY1Jv9PyAaN8BSzeTubiwyyVddGImSJgyZJ3BkGBqFBDPbI0PMA+4gEffXVi4yMGUww/8EEcxyiq2rREnTC+J4f8Ak7Bs4KMSvnqJE8jpzHkdiJZTAqzBmchTk2UaBhoWgwJ01/SEwdKmcSxYv4YEe2GXMoknZp05iTMnqdZLV52ZtC4crHYagRqFygAzyOaPOKTOemDk+h8MeqaSXJG4tabD3ybeiP4lHIidVjyPw0o1gFe4oORl6hgR8J3Fe4zD2+8t2TPhyPbZjOobxJPOVX8RpO4viLyBe6t94xJ6wI5n/wAioMvkNqKit329j0MfipNyb2XS3I2J9o+WnwFcZepimMPjhcJDeG4CQyHkRoY6iaepyi4pJk8pKUm0d5gNvfPP3cqbuMFBJ2AmvTQvjWLGWB5j9oXB960cI6nQuUtKIHG8TnaOQH37/dX0Ka+bGM719JmrYqlRHJ27FSpUqIEVYP24H8vxP9K1bxWD9uP9vxP9K1YzUB7zljJ35nmfXkfXem66IqRZxRVMn1STMEgwYET7uc71jNIleipDYaQWtnMBuPrL6r08xp6UwK6zqoJ2LpdZmD1GkN1Hn9b49KOdi5Nu4zEkl9STJ0Uc+e9VnAPDRyPyI2NGuDcXt2EdXVixuFgFiIKrGpI00+YqXzMbnjelb7Fnh5FHInJ0txnssv8AKm8g/wB4FWjMSbgnbbbTwT7v86pGA4i9q41xQpLBhDTAzEHkR0ouuLu3bheypKuYuLMHQBVJkwug01g6gzGs+fx3KWp0lS3KcHkRjHSrbt7IKYS/bez3bNlhdeWgO4Ox5ULx9u3baEUwCkyJa6ZIIAjmJGg1O+mtE8DgDJz/AFdo5g6zPx+Jp7h2FAu3GJJywqT9VYzGPPUCfKlrJjxSbg2+663GPHPNFKSS6vsrGIwV+5cS2U7sNOQMAPCgO5EkkDkftVN/0Alu5ZDNnDsQwggaKTpHKRRO+5bFoJAW1Ig7lrlsnTqIA/ZPlTvEbpF/DqNmZ59yiPTeun5GRtLi03sdDxsSTfNNLckd6lt0thYzBiAoAUBQJnpuKh4ayq4y4R9a0rH1zwf7oPvoi1xcwUkZiCQOcCJ/dQ3D2yMbcMk5rSn08QWPTwn41HDiX4/fctmt4/n9hjHurYkIdwbZHuDER6E/A0S4ljUtJncMRMeESZMn0G3OhPFcAwxCXpGU3LSgazyE/EUZxdi26xcAKgzqYHTX4/dTMjg/p3uq3oVj1L6nTvazPLtwly8wSxOnIkzR7hHEhchH0ucjyfy8m+R8joRXG2tm+/dRk0jKIGigGPfNRUSdOfLz8q9nSpwXX+jxNThkff8AsN8Xx0eEHdT91xfvigty6W3/ABqx/wC41LtfnvCSBd+qx/3n6LH7XRuex5GoZXkdCPjWwSW3YM7f3dHRt+EsNQN+onTUdJ57ajnpX0ga+b7LldR0I1EggiCCK+kDTUKYqVKlWmCrCu2yj8uxPiH843X+FbrWH9tH/luI1H843M9axmor5QfaHz/hSyfpL8f8qfz/AKnxH7xSDDov7Vv961hoyqkEEMARsQ0H40Z4XwlsQpdyqwYzrGYmAdVGh330PrQsnyX9q3/hq2dkf5g6R4zsVP1U6CKk8vJLHj1R5K/DxxyZKlwBBwC73zIjKckHOTEbESokg61ItcGz3+7uGMoJJXmNIAnbeR5EjlRjhTTfxPrb6cgw9eXOiPcjPn55SvqJB+UfM1FPzJpuL9L9y+HhY2tS9v8AYHcM4ZYt3HCrJAU+KCQGnbpsa54FhMly+IEZxHoRmA9wanQ5GKjL4WSJjdh4on0B086niBJ66n4R9wqfJkmlUnepIpx44cpVTZGwTEvcJMrn8PQZVCkesqT764wNz85dXzkT8Puio3Zf+buEiCbhJ0ImVUzuetP4CyxuPcO2ZwnUiSGnynbyomoxc0/SS/IKcpKDXtt/g9xdgd/auQJMj3gHX1gx7qa4is4jDbwDd/uiK6xmIXv7SfZzFjyEqYBbYbfMUN45xMC9aa2M5t5p0bL4gBAPPY60yGPJJx26YE8sIp79oNvhpurcn2VZY/WIMz7vnQi/xS3bxblyYW2EkCfEGzEaepHuqBi+0F9hAXID9neP1iD8RFTsJ2ft5M1wszFZiYgkTvzPrRwwLHvmfKpJASzyyOsK43bYP4zx43AFRSgDBgxPildRoNBr67VGsY+5cb845aZ3IgeE7KBA91D1BYwoJnYbn08zXdq0c6qZUkgajUSQNq9GGLFBUkeZPNlm7b5JLIi3kdxKEhmETzMiOe3317xe9YYJ3SBW1Z4kAEmQoB+z1GlWDifBF7lgpYuoBHnlnSPOTTvFMKgwjhFUeBToBrBBknmalflQlKLjfNeiteLkjBqVcWUuCD57/vFS+J+MC8I8ejgcrg305BhqPfTN9ZVT7v8AL8da74ddAJRzFt9G8iPZf+qflI51bJf/AEujz4PmL7/yRuVfSRr5xxFlkZkbQjQ/5dQd586+jjRxd7i5Jp0xUqVKiMFWJds5/LMQfF/ONO/u0zDzrbaxHtg846+JA/OupJ2hjmUn0M1jCiBszcg/wf8Ax0sx6P8AB/8AHU7ifB1t2VuK4kbg7NMkZT1jlzoLQxkpcBSi47MmZjzDe8N/Grb2VH5j1Zv3Dn6VRhV57KaYZCer/wB9qh/9D+l+pd/539V/g84GZvYg/pgfA3B0H76n4bEhmuLzRoPvUEfeR7qC9k8SsXXZgoZwfEQPtHn61Ctcd7vEXXALI+kTHs6KR8/jUk/HlknJJcJUWx8iOOEXJ8tj/FsabeKLTAGSfNYE/V13bnVhx7AI5kaK2+2xqj43iTvda4NM31dwAABz9BrpTV7HXWGVrjRyEmB006Cq5eG5KHVVZGvNUXOt7ug9wbi9m3aIZiWLE5RrpCgamBGkUyOO3BbgFAZgERI5ncxzHKgPet9o/E05buEgiddwSfiNfxvVH8LDU5NXe+5P/F5NKinVeidhEYRdLmGaCZEkwdSZ9an8M4cj3gSJUAkjkSCI57ajTy86BS5MeKTsI1+FWDssctzKWBbIxKjWJZdyNB6etd5DccTaN8WpZUmiR2psn80VMalNlPtRGhPkaM3x4Gj7J+6lft5gBpoVOoB2IJ38p1pyvEeXVGMfR7kcemUn7AnZPDgWy5JLEkSeQEaDU85qP2usKHt3SYOixG+Vp35RNTuzSlcMnXxH/qMfdTPaK074UFxDrkZh5+y22keImnxyP67bfwTyxr6CSXyG6H8eH8mux9n5SK64rfKWGdTBABB94prE4lbuFuOvO2+nQhTI9RU+ODUlPq6KMk04uPdWU3DAMCp9R5H8fjSmCCK6sXIYHf8AgaWJWGPx+NfRnzQQxQ7zDrcjxWotv5p9Rvd7Nb+a+eOF4vu2IbW24yuvVTzHmNxX0PQY4uLa66CySUkn33+gqVKlTRQqwvtjbzcRxAGgNxgdR67e70rdKwft8hTiF89bhYEef+YNYzUK7LKq3LkpGiyFmFbK3OBCnXqYqJe4dlS4xIGU+HUajxCN9zA+B5yKiYEISwcgAroeYOZTI01MTpUi5aw49nvG10gTmXY6wOfMT086XwMu1bIM1JTHXRb7sOwQz4QY3313g9NqbuopIyBgTsGjWdiDp6V3ZwrGZlY6g677QNdifdWtJrcxOSewwKmWeHXGXOAI7u5c3+paMMfWdIrk4I5A2ZQTOjMBpyifxqPOjXZe+blu7YfKLa2nJuKE7xULrnQXGIUIZJM/Gub22OS33I13s1iFcI2QZmVVMmCXV2GsbDu2B93IzUns/wAOZWYtbW5mS1lJYBMl5su5UnNy20hvKjdo3LjWit8OvfXCpCAiLVor4NdZBPMidRTHDsSEw8TdUWXQKt23leXM288PsCT7jQuToLSrAY7MYiWANslY+swkwTAlRrCneKX+gHU2g2Vnu+yisBAy5szNHsxuR8as9k32e4rOQO9u28uSO8RLJIIzNABzcoEga713h7LgXLeZVS0AihbSTFy2pYlWOUty00MnTWu1s3Sim8Qw9+2ktCLna3kU65k3nmRrvJqR2M/nz+o395aYx/H7l1WR0tGTObJ4lMKCVM+EnKJ99SOxR/Pt/Rn+8lL8nbDL8DfF/rxLV+UDvO755M/uzEH91c8LxXeILmwJaPQMQD8AKq3bRvz66/7sf3n/AHH517geP93YW2qEuM2reyJYkQBqd/KvNXht44yjy6/Q9N+ZFZJRlslf6liwhyYdT9m1m+C5qi4Hi9q7YJusinxBlmJHksknQjadarTcRxFxVtZiRAUKAASB1IEnQeldcT4b3KKzXFZmYgBYIKrozZgY9rSPL3CiHgqnre7d7E+Tz91oWyVbhXifGrLYc21LMxVR7MQRG5PpymgFnGXEVkRyFfRhprpHu91R5qwcBRTZkqpykySs+e/p93woWKGGNJWm+ydZJ+RPd00ugADrT2OjN7hTnG1i6dAJC6DbYDSfSo+KaSP1R/4qmLtJkk46ZNDbHQ19KGvmzvCAR4deqqT8SJFfSZokAxUqVKtMFWM9vranF3WImC//AHfv1nllrZqwPtpiSvEcTrI71tOX43+NDJWHB0DMRihDKECljqfOZjyHlTlu67kd1bAyiNIMZieZ57/PzpmEYb84nntpPy/Zaoy3GWRqJ/cZ+8VlGhB0uF0a4wBOqk9QdBoIGp1mlfVd3uyPqjcxpynwnX5VDwrp4s86jSBJnqPP16nUaU6+MQAhLagEQS0knWeunLbp5xWHbDuJ7sBVQEkiZkc+RAGpG9eYO1cOcJmErrBIzKSPCeoO8c4pmzxB1UKuUROsa6+fvpjv218R1MnU6kbE9TW0ztgx3fd5D3pUI7H2+cx4Qux01jXUTXFy+bhyK164zmSJJLkAZZ3LZYMac6Eu5JJO5Mn1NG+xpBvXFmC1m6qwwViTl0VjoGiYJrHsrNTt0NvexTsBN8tlIAm4Wyey8DeNCDGmkcq9bFYzfPiBIUTNwSJyr6iTA9fOrfdYDEB+8TLkC5zctrJXGd6+kj6gLbQda6uYi04T84oE2mMsJ8LYW4YnYZV265vcOr4C0/JQbeGusxRbbllnMoU5hG8iJEedP2cLiUOZbd1TyIRwddIBjzFHcDiFGMvkXraJcVHzZgCcwS5nQkxmRjmKmZAYQae4VxRTkD3l0sWGIe4IDLdc3Rqfby5dNyAOlc5fBij8laGEvvLd1dbQMTlY+FvZYmNjBg+VM4nD3Lcd5bdCZjOrLMdJGtXlcVh1iLtoEWltKS6wGtpdUGJ8Q/OgVU+N45XdCT3oNi0BLk5LhtpmOh9oEGQeZ1rYyb6OlHuws3Ee6VWtYVwhUsXdSsgumVlZRovsjzJX3xb+KxbxltFVEFAqA5Fa3KhCQSoKWy2kHQmiN/EJdwxQYi0C9hAttmRYdO4zSxMhjkjKfsyOdTH4jhtIvWvAoX2l1Fu1etjL1nvQB1ynpQ6vg3T8lSxPD8Sc9y5bu+HV2cNI0GpJ12j3U5awuKQKoRwHBdPCPEAuYkE+QBo/2jxlq5YuIl2yzAlp72NM91gEy6OxXIuXbxbzT2E4rh1Wy5u2/wA3bllzAsWNm0gAWdNnUjqK1ybXByjT2ZWL+AxLgXGt3GBWQ0TK5Q2nuIPvqNxGxctkJcUqwA0O8cvlV2/0rhks90t+3pbZUYMCVZbbIrAc9F95ZRzqqdrrqNeBS4rgoCSplMxd5y9AfayyYLEcq6Em3VAzj3Y5w3BW3tuWklUz89uQ3Hl8a+gDXz1wviwRMrXHXKDly6jUHddun+fL6FNMiBKthUqVKiBFWI8Uwdi7xPHC8SFR2bQxtAP3g+41t1fO30gj/wC44r+mb91DLgKPISu8Bt54XwqTGYvoPBiNYJ2zra+B617xPh2HXuoIbPfCMMxMWnuXCCDO+Tu9f0T9o1Tio8qUUNfIer4LzY4JhAFzQ0sVP5wg6Ea+1A8PiO8AnnFeYjgeFgQVWHZWJunmrqgAk/Xa0dfIHc1SbbFSCNCNRXtrLmBYErzCwD7tIFZpfs7UvRa24ZhBiu7DA2whJGYiBJJbvM0eEQI/RnrU2/wbCZoAT2k/3pkqbgDyC/Jcsbe0ddNKcjYcbi78U66e+Irn8x0ubdV3j02rqfs216LXhcDg2uhWRVHcozTdIAuMxUhT3hnVdpOje+nbvDcELbFRaZuQ77UjTWDdAGmpMmDyPsVUSbHIXZg7lYnWOX4jzrwth+l39pNTPMxppWU/Z2peiw8PwmEOJuq5TIAYUvCr/NxFzOcx8TAiTEHU708+FwIuJDWimW7mm50e3kJ8XtZO8IAO4jfSqz3mHkwrkcvEs6e7nqefSkLmG+zc/bWeWnsjTf41tfJ1/Ba8PYwBUF+4ExteM6qpGZS/hJOaRrEDUExS4nhsAEvd33RItubcXZbvArGIz8oSNDMka8qj3tjXwvvp416DQnLrrPKujcsckfb/AIg9x9n4+ldXydqXosXA7eD7li7W2cMQvekISumuU3BG55nbSToZHFBgBaYW+6JFp8pDjPnygJInxN4i3kU89Kqt/D/8NjqN7onzBhNtuU+ded9Y/wCG/wDaj/BWNHKWxbLLYFgjN3CEMMwBgEPY10kyBccfqlPWnCcBAA7kgDmygsVJ3YSwkBTMGduZqonEWJEWyQCd7m41iYGh2OlI4rD6RaPn+d9dvD6fPTnXafk7UGMG+FS/dz5HtyYgDJBu2QMniMkK12YJgLILUbV+HwP9nksoMZYEHxa7ZdyDsdBtFUfEXLZACoVPMl80+Wwj/Omc46iuavs7VXRce+wwyr/JtQATCmG7q+CxYgggutrlAzcwQx67/Ateae6CEWsui5Rle6XERzAQRzBU9apgcdR8a9zDqPjXUvZ2v4Lwb/Dwunc6iASqyNVEtKkTBmWnZulbea+buCY63bZTkhhIa7nMKrECQmXQgGNDJk6iZH0iaOCoGbsVKlSoxYqD4nhOGdyz4ewzHUs1pCxPUkrJNeUqVl4DgcngmE/5ax/ZW/8ADXg4JhGGuGsH/wBK3/hpUqQGNf8A07gf+Uw39jb/AMNOJwLBj/8AVw/9jb/w0qVYYyRb4Zh1ELZtD0toPuFc3OGYc72bR9baH7xXtKuCGjwnDf8AL2P7K3/hp2xgLI2s2h6Ig+4UqVYcdvhrZ+ov7I/hXNzDW1BhEH9Vf4UqVccOtZVdlA9wrsUqVYccLaVt1B9wptbKfZX9kfwpUq046UxTRuH8AUqVccI3m61yb7dfkK8pVxiG3xDdfkP4V4cU/X5D+Fe0q408OJaN/kP4UfpUqow9gSFSpUqcLP/Z',
    alt: 'Yuji Itadori',
  },
  {
    src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/10/Dont-Speak.jpg?auto=format&q=60&fit=max&w=930',
    alt: 'Yuji Itadori',
  },
];

function App() {

  return (
    <>
      <Carousel items={images} />
    </>
  )
}

export default App
