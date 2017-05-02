yarn run build

onlineDomain="sh.ktvms.com"
offlineDomain="shtest.ktvms.com"

scp -P 789 -r dist/* frontend@$offlineDomain:/data/wwwroot/$1/$onlineDomain/frontend
