$Comp = Read-Host -Prompt 'Component name'

docker exec -it tag-lib-dev npm run comp.new -- --name $Comp
