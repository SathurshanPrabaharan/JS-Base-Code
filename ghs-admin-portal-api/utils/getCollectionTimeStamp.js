exports.getTimeStamps = () => {
    return {
        created_at: new Date().getTime(),
        updated_at: new Date().getTime()
    }
}
