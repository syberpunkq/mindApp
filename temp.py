
    files = []
    uploaded_files = request.files.getlist('files[]')
    for file in uploaded_files:
        files.append(file.filename)
