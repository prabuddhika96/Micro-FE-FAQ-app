using UserDataAccessLayer.Entities;

namespace UserBusinessLogicLayer
{
    public interface IUserServices
    {
        Task<IEnumerable<InternalUser>> GetAllInternalUsersAsync();
        Task<IEnumerable<ReqResUser>> GetAllReqResUsersAsync();
        Task<ReqResUser> GetReqResUserAsync(Guid id);
        Task<InternalUser> GetInternalUserAsync(Guid id);
        Task UpdateUserAsync(Guid id, ReqResUser putUser);
        Task UpdateUserPasswordAsync(Guid id, string password);
        void DeleteUserAsync(Guid id);
        Task<InternalUser> CreateUserAsync (PostUser postUser);
    }
}
