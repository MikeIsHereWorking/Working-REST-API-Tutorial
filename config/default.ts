export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApypPmUzFgv8BWmJ0KQgF
xwH6wk6o/akK2OdYjd5ypV4otXTWm2IcVmSBU4sd9UMPVzSqFINslvZZKRdLOFYG
zZhE+b4yncFil9D/UFXpNCBkDMqKcXkVZTU6RscRR0ojAppZxQWCgVQV6VAw7AEB
85tLJfQY0OezHM1+Y1KsB1lfPK5T0vs73jnfHpw2SUlvbUAdXRyGyp5MxjM+j3Pz
V0fYxkDn/Bui5nIilhXdtRzci/BhvYxAcTGI6zlqiQQL7uk+wm8J3fqFjRu6HDO1
TvmoRZPgdtm0Tn83EJwzCrQ1bRjrEcifPxbcXr78RwGwix1Mi0jVR++uIFx+xCe3
tQIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEApypPmUzFgv8BWmJ0KQgFxwH6wk6o/akK2OdYjd5ypV4otXTW
m2IcVmSBU4sd9UMPVzSqFINslvZZKRdLOFYGzZhE+b4yncFil9D/UFXpNCBkDMqK
cXkVZTU6RscRR0ojAppZxQWCgVQV6VAw7AEB85tLJfQY0OezHM1+Y1KsB1lfPK5T
0vs73jnfHpw2SUlvbUAdXRyGyp5MxjM+j3PzV0fYxkDn/Bui5nIilhXdtRzci/Bh
vYxAcTGI6zlqiQQL7uk+wm8J3fqFjRu6HDO1TvmoRZPgdtm0Tn83EJwzCrQ1bRjr
EcifPxbcXr78RwGwix1Mi0jVR++uIFx+xCe3tQIDAQABAoIBACyS0KS83tGeM3sp
U3X5aKj28ylKli8FGxpZHbi+fu1vXQV9gRfvokS7Cez/5F4YooeLSGqt3I+oYn/d
cTY1Yh0CJCo/t/lurl5y4RFHxyYaGPN8MkwtkDHrbn2e6RGMSCeShqtNW84mYK1U
r6bOYfnWB8S4AMH7djwQ40mSqsJOd8ocFkKfiaUW+REMsvaTrLX+6GHJaH39lBVg
sICL8G8D1vDKlCaOHo7Indeq99z6p2Qg50t25sX94QVwaPIkPJ80o8dG4wx9M23F
JCZ4+7XaHmd33VyYRMCTTCwHptASjPop9YAA8o8oAYtbz3tU8gf4TmOZx4uYhzks
sf9ss8ECgYEA8LsI/L/D+4Xp0ENaJpsfRmD/pWQWFMgoUCtscSR4a+w2H2VCBqSU
rfvwnRamjcKUTiLJW6jFzhiIFxyKtz9o0xyfLACTQNhd4ar5fyR9DvNPxRXhq3mh
Hpls5Sn5ahYv4aKs9Tg2sS9zDQtg5HEfiS1LtVKHwFiaOVg6en3d3qUCgYEAscS6
TFOadC4r9Zm0eUFWv8vI89a4GIKOGUY5Fb0wZjkgBc+MO+60v9eihIMZlx2NKluc
qu00Of3ET8HbmG1KMvSFeitW/1Y1swgGC75JFWOXbOIMwg6di0d2mXV8WNT4oQMs
wK/5Ot3tBI583AE9WzKZBhNpAcDSEUWmppbZt9ECgYEAnHTS+IIh+/0i42qC0wiK
oRE11eZgu40DNmeiiT5szaet3WXQLcUVpKZT0aUBBq1p+gZ93Aaq2LH08SBpv4OE
u4CkqtKM4d491gdrNIkghnD4bV01WF8qqlqI/b/0DFDzObCivJWWZj4yhk3Y4V/s
YRmBVQ2YkRiE07RV/XqEkskCgYBKgmeHiF8rpRKdzX/cdutyVmry8SOWelou88UH
fJWlsvneFaD0mde+tRYULpLySNubTmy7I9MJH3lB6MIvAFfiRaUQkMvVGABH+uv1
zhr50RVt+M1aJSAZeamXJqwo25MegaMnXFq9NrmaeFKTMB3UdL+40TfpGTWzMZtp
Jb85kQKBgBwP6E8wMm9jch7COc0rrAsaZ1gWXNVcS9reIvCAUkAH+Nmh+GRjKDVm
5/nTpFevEZulMROV88H2oUwmhNsIv3IC2Ol27F94ZNAWg/l7C8S5wobG8h6MNsJo
SRv4VCueaLFgPwl1q6xyo28sN9L1zSZHpbcpMSkSm5wlA5CneIja
-----END RSA PRIVATE KEY-----`
}