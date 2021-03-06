## Sanitize Indicators of Compromise

Defang is an outlook plugin that allows you to quickly sanitize IPs, domains, and [protocol handlers](https://en.wikipedia.org/wiki/List_of_URI_schemes) while composing or receiving emails.

```
5.22.9.12  >>>  5[.]22[.]9[.]12
evil.com   >>>  evil[.]com
https://   >>>  https[:]//
```

This promotes the sharing of IOCs in a safe format that is consistently undetectable by email protections and other threat filters.

## Install / Test

- Download [manifest.xml](https://static.defang.wtfender.com/manifest.xml)
- [Side-load](https://docs.microsoft.com/en-us/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing) into Outlook

## Distribute

- Download [manifest.xml](https://static.defang.wtfender.com/manifest.xml)
- [Deploy to Outlook users](https://docs.microsoft.com/en-us/office/dev/add-ins/publish/publish) via Microsoft 365 admin center, SharePoint catalog, or Exchange server.
