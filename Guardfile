# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  # watch(%r{app/views/.+\.(erb|haml|slim)$})
  # watch(%r{app/helpers/.+\.rb})
  watch(%r{app/.+\.html})
  watch(%r{app/.+/.+\.html})

  watch(%r{app/scripts/.+\.js})
  watch(%r{app/scripts/vendor/.+\.js})

  watch(%r{app/styles/.+\.css})

  watch(%r{.tmp/.+\.(css|js|html)})

  watch(%r{app/bower_components/.+/.+\.(css|js|html)})
  watch(%r{app/bower_components/.+/.+/.+\.(css|js|html)})

  watch(%r{app/images/.+\.(png|gif|jpg|jpeg|PNG|GIF|JPG|JPEG|tiff|TIFF|pdf|PDF)})
  watch(%r{app/images/.+/.+\.(png|gif|jpg|jpeg|PNG|GIF|JPG|JPEG|tiff|TIFF|pdf|PDF)})

  # watch(%r{app/templates/nanoc/nanoc.yaml}) # Change this to config.yaml if you use the old config file name
  # watch(%r{app/templates/nanoc/Rules})
  # watch(%r{app/templates/nanoc/^(content|layouts|lib)/.*$})

  # watch(%r{config/locales/.+\.yml})

  # Rails Assets Pipeline
  # watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end

# guard 'nanoc' do
#   watch(%r{app/templates/nanoc/nanoc.yaml}) # Change this to config.yaml if you use the old config file name
#   watch(%r{app/templates/nanoc/Rules})
#   watch(%r{app/templates/nanoc/^(content|layouts|lib)/.*$})
# end
